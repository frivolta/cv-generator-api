import { User } from 'src/user/entities/user.entity';
import { define } from 'typeorm-seeding';
import Faker from 'faker';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.userId = faker.random.uuid().toString();
  return user;
});
