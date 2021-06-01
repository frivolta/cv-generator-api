import { HttpException, HttpStatus } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetCompleteUserProfileOutput } from './profile/dtos/get-complete-user-profile.dto';
import { Profile } from './profile/entities/profile.entity';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Profile)
    private readonly profiles: Repository<Profile>,
    @InjectRepository(User)
    private readonly users: Repository<User>,
  ) {}

  async getPublicProfile(
    publicUrl: string,
  ): Promise<GetCompleteUserProfileOutput> {
    try {
      const userProfile = await this.profiles.findOne(
        { publicUrl },
        { relations: ['user'] },
      );
      if (!userProfile) {
        throw new Error('This user has no profile');
      }
      if (!userProfile.isPublic) {
        throw new Error('This profile is not public');
      }
      const userCompleteProfile = await this.users.findOne(
        { id: userProfile.user.id },
        {
          relations: [
            'profile',
            'workingExperiences',
            'educations',
            'skillsets',
          ],
        },
      );
      if (!userCompleteProfile) {
        throw new Error("This user's profile is not completed yet");
      }
      return { ok: true, user: userCompleteProfile };
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }
}
