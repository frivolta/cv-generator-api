import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { User } from 'src/user/entities/user.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { WorkingExperience } from 'src/working-experience/entities/working-experience.entity';

const isZero = (count: number): boolean => count === 0;

export default class CreateWorkingExperience implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const workingExperiencesCount = await connection
      .createQueryBuilder()
      .select()
      .from(Profile, 'Profile')
      .getCount();

    if (isZero(workingExperiencesCount)) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(WorkingExperience)
        .values([
          plainToClass(WorkingExperience, {
            title: 'Working Experience',
            position: 'Frontend developer',
            startDate: '20 sept 2019',
            description: 'No desc',
          }),
        ])
        .execute();
    }
  }
}
