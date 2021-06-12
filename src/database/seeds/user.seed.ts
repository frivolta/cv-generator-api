import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { User } from 'src/user/entities/user.entity';

const isZero = (count: number): boolean => count === 0;

export default class CreateUser implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const countUser = await connection
      .createQueryBuilder()
      .select()
      .from(User, 'User')
      .getCount();

    if (isZero(countUser)) {
      await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          plainToClass(User, {
            userId: '123456',
            email: 'rivoltafilippo@gmail.com',
            profile: {
              name: 'Filippo Rivolta',
              email: 'rivoltafilippo@gmail.com',
              phone: '+39 3347001377',
              isPublic: true,
              workTitle: 'Front-end developer',
            },
          }),
        ])
        .execute();
    }
  }
}
