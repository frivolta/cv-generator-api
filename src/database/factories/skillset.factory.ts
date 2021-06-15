import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Skillset } from 'src/skillset/entities/skillset.entity';

define(Skillset, (faker: typeof Faker) => {
  const skillset = new Skillset();
  skillset.title = faker.lorem.word();
  skillset.skills = Array.from(Array(5), (_) => faker.lorem.word()).toString();

  return skillset;
});
