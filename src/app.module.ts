import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import * as Joi from 'joi';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { ProfileModule } from './profile/profile.module';
import { Profile } from './profile/entities/profile.entity';
import { WorkingExperienceModule } from './working-experience/working-experience.module';
import { WorkingExperience } from './working-experience/entities/working-experience.entity';
import { EducationModule } from './education/education.module';
import { Education } from './education/entities/education.entity';
import { SkillsetModule } from './skillset/skillset.module';
import { Skillset } from './skillset/entities/skillset.entity';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';

global['fetch'] = require('node-fetch');

@Module({
  imports: [
    AuthModule,
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'test').required(),
      }),
      load: [appConfig, databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    ProfileModule,
    WorkingExperienceModule,
    EducationModule,
    SkillsetModule,
    TypeOrmModule.forFeature([Profile, User]),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
