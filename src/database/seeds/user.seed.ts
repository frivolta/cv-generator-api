import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { Education } from 'src/education/entities/education.entity';
import { WorkingExperience } from 'src/working-experience/entities/working-experience.entity';
import { Skillset } from 'src/skillset/entities/skillset.entity';

const isZero = (count: number): boolean => count === 0;

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const countUser = await connection
      .createQueryBuilder()
      .select()
      .from(User, 'User')
      .getCount();

    if (isZero(countUser)) {
      await this.randomUser(factory);
    }
  }

  private async randomUser(factory: Factory) {
    return factory(User)()
      .map(async (user: User) => {
        const profile: Profile = await factory(Profile)().create();
        const education: Education[] = await factory(Education)().createMany(5);
        const workingExperiences: WorkingExperience[] = await factory(
          WorkingExperience,
        )().createMany(5);
        const skillsets: Skillset[] = await factory(Skillset)().createMany(3);

        user.profile = profile;
        user.educations = education;
        user.workingExperiences = workingExperiences;
        user.skillsets = skillsets;
        return user;
      })
      .create({ email: 'rivoltafilippo@gmail.com' });
  }
}
