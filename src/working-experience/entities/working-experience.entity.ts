import { CoreEntity } from 'src/common/entities/common.entity';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, Generated, ManyToOne } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class WorkingExperience extends CoreEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  position: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  startDate: string;

  @Column({ nullable: true })
  endDate?: string;

  @Column('boolean', { default: false })
  @IsBoolean()
  isActual: boolean = false;

  @Column({ nullable: true })
  description?: string;

  @Column()
  @Generated('increment')
  order: number;

  @ManyToOne(() => User, (user) => user.workingExperiences)
  user: User;
}
