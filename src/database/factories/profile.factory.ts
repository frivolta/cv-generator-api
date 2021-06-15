import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Profile } from 'src/profile/entities/profile.entity';

define(Profile, (faker: typeof Faker) => {
  const profile = new Profile();
  profile.email = faker.internet.email();
  profile.name = faker.name.firstName();
  profile.workTitle = faker.name.jobTitle();
  return profile;
});
