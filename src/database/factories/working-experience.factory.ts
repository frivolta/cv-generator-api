import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { WorkingExperience } from '../../working-experience/entities/working-experience.entity';

define(WorkingExperience, (faker: typeof Faker) => {
  const workingExperience = new WorkingExperience();
  workingExperience.isActual = false;
  workingExperience.position = faker.name.jobTitle();
  workingExperience.title = faker.company.companyName();
  workingExperience.description = faker.company.catchPhraseDescriptor();
  workingExperience.startDate = 'Sept 2019';
  workingExperience.endDate = 'Oct 2020';
  return workingExperience;
});
