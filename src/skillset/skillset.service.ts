import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import {
  CreateSkillsetInput,
  CreateSkillsetOutput,
} from './dto/create-skillset.dto';
import { FindSkillsetOutput } from './dto/find-skillset.dto';
import { GetAllSkillsetsOutput } from './dto/get-all-skillsets.dto';
import {
  UpdateSkillsetInput,
  UpdateSkillsetOutput,
} from './dto/update-skillset.dto';
import { Skillset } from './entities/skillset.entity';

@Injectable()
export class SkillsetService {
  constructor(
    @InjectRepository(Skillset)
    private readonly skillsets: Repository<Skillset>,
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}
  async create(
    user: User,
    createSkillsetInput: CreateSkillsetInput,
  ): Promise<CreateSkillsetOutput> {
    try {
      await this.skillsets.save(
        this.skillsets.create({ ...createSkillsetInput, user }),
      );
      return { ok: true };
    } catch {
      return { ok: false, error: 'Cannot create skillset' };
    }
  }

  async findAll(user: User): Promise<GetAllSkillsetsOutput> {
    try {
      const skillsets = await this.skillsets.find({
        where: { user },
        order: { order: 'ASC' },
      });
      return { ok: true, skillsets };
    } catch {
      return { ok: false, error: 'Cannot find skillsets' };
    }
  }

  async findOne(user: User, id: number): Promise<FindSkillsetOutput> {
    try {
      const skillset = await this.skillsets.findOne(
        { id },
        { relations: ['user'] },
      );
      if (user.id !== skillset.user.id) {
        return { ok: false, error: 'Permission denied' };
      }
      return { ok: true, skillset };
    } catch {
      return { ok: false, error: 'Cannot find skillset' };
    }
  }

  async update(
    user: User,
    id: number,
    updateSkillsetInput: UpdateSkillsetInput,
  ): Promise<UpdateSkillsetOutput> {
    try {
      await this.skillsets.save({ id, ...updateSkillsetInput });
      const { skillset } = await this.findOne(user, id);
      return { ok: true, skillset };
    } catch {
      return { ok: false, error: 'Cannot update skillset' };
    }
  }

  async remove(user: User, id: number) {
    try {
      const { skillset } = await this.findOne(user, id);
      if (!skillset) {
        return { ok: false, error: 'Cannot find skillset' };
      }
      if (skillset.user.id === user.id) {
        await this.skillsets.delete({ id });
        return { ok: true };
      }
      return { ok: false, error: 'Permission denied' };
    } catch {
      return { ok: false, error: 'Cannot remove skillset' };
    }
  }
  async changeOrder(user: User, newOrder: number[]) {
    try {
      const skillsets = await this.skillsets.find({
        where: { user },
        order: { order: 'ASC' },
      });
      const swappedItems = skillsets.filter(
        (education, idx) => education.order !== newOrder[idx],
      );
      if (swappedItems.length !== 2) {
        new BadRequestException(
          'Cannot change items order, too many arguments',
        );
      }
      await this.skillsets.save({
        id: swappedItems[0].id,
        order: swappedItems[1].order,
      });
      await this.skillsets.save({
        id: swappedItems[1].id,
        order: swappedItems[0].order,
      });
      const updatedSkillsets = await this.skillsets.find({
        where: { user },
        order: { order: 'ASC' },
      });
      return { ok: true, skillsets: updatedSkillsets };
    } catch {
      return { ok: false, error: 'Cannot change items order' };
    }
  }
}
