import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import {
  CreateEducationInput,
  CreateEducationOutput,
} from './dto/create-education.dto';
import { FindEducationOutput } from './dto/find-education.dto';
import { GetAllEducationsOutput } from './dto/get-all-educations.dto';
import {
  UpdateEducationInput,
  UpdateEducationOutput,
} from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {
  constructor(
    @InjectRepository(Education)
    private readonly educations: Repository<Education>,
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async create(
    user: User,
    createEducationInput: CreateEducationInput,
  ): Promise<CreateEducationOutput> {
    try {
      await this.educations.save(
        this.educations.create({ ...createEducationInput, user }),
      );
      return { ok: true };
    } catch {
      return { ok: false, error: 'Cannot create education' };
    }
  }

  async findAll(user: User): Promise<GetAllEducationsOutput> {
    try {
      const educations = await this.educations.find({
        where: { user },
        order: { order: 'ASC' },
      });
      return { ok: true, educations };
    } catch {
      return { ok: false, error: 'Cannot find educations' };
    }
  }

  async findOne(user: User, id: number): Promise<FindEducationOutput> {
    try {
      const education = await this.educations.findOne(
        { id },
        { relations: ['user'] },
      );
      if (user.id !== education.user.id) {
        return { ok: false, error: 'Permission denied' };
      }
      return { ok: true, education };
    } catch {
      return { ok: false, error: 'Cannot find education' };
    }
  }

  async update(
    user: User,
    id: number,
    updateEducationInput: UpdateEducationInput,
  ): Promise<UpdateEducationOutput> {
    try {
      await this.educations.save({ id, ...updateEducationInput });
      const { education } = await this.findOne(user, id);
      return { ok: true, education };
    } catch {
      return { ok: false, error: 'Cannot update education' };
    }
  }

  async remove(user: User, id: number) {
    try {
      const { education } = await this.findOne(user, id);
      if (!education) {
        return { ok: false, error: 'Cannot find education' };
      }
      if (education.user.id === user.id) {
        await this.educations.delete({ id });
        return { ok: true };
      }
      return { ok: false, error: 'Permission denied' };
    } catch {
      return { ok: false, error: 'Cannot remove education' };
    }
  }

  async changeOrder(user: User, newOrder: number[]) {
    try {
      const educations = await this.educations.find({
        where: { user },
        order: { order: 'ASC' },
      });
      const swappedItems = educations.filter(
        (education, idx) => education.order !== newOrder[idx],
      );
      if (swappedItems.length !== 2) {
        new BadRequestException(
          'Cannot change items order, too many arguments',
        );
      }
      await this.educations.save({
        id: swappedItems[0].id,
        order: swappedItems[1].order,
      });
      await this.educations.save({
        id: swappedItems[1].id,
        order: swappedItems[0].order,
      });
      const updatedEducations = await this.educations.find({
        where: { user },
        order: { order: 'ASC' },
      });
      return { ok: true, educations: updatedEducations };
    } catch {
      return { ok: false, error: 'Cannot change items order' };
    }
  }
}
