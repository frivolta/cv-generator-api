import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Education } from '../../education/entities/education.entity';

define(Education, (faker: typeof Faker) => {
  const education = new Education();
  education.institute = faker.lorem.words(2);
  education.title = faker.name.jobType();
  education.startYear = 'Sept 2015';
  education.endYear = 'Oct 2018';
  return education;
});
