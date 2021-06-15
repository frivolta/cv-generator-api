import { IsNotEmpty, IsString } from 'class-validator';
import ShortUniqueId from 'short-unique-id';
import { CoreEntity } from 'src/common/entities/common.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToOne } from 'typeorm';

@Entity()
export class Profile extends CoreEntity {
  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  template?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  biography?: string;

  @Column({ nullable: true, default: false })
  isPublic?: boolean;

  @Column({ nullable: true, default: new ShortUniqueId().randomUUID() })
  publicUrl?: string;

  @Column('simple-array', { nullable: true })
  bottomNotes?: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  workTitle: string;

  @Column({ nullable: true })
  photoUrl?: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
