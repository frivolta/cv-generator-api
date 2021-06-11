import {MigrationInterface, QueryRunner} from "typeorm";

export class init1623431006364 implements MigrationInterface {
    name = 'init1623431006364'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying, "template" character varying, "phone" character varying, "website" character varying, "biography" character varying, "isPublic" boolean DEFAULT false, "publicUrl" character varying DEFAULT 'w3HRSX', "bottomNotes" text, "workTitle" character varying NOT NULL, "photoUrl" character varying, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "working_experience" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "position" character varying NOT NULL, "startDate" character varying NOT NULL, "endDate" character varying, "isActual" boolean NOT NULL DEFAULT false, "description" character varying, "userId" integer, CONSTRAINT "PK_d44ce12cea702e75b3ac25e399e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skillset" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "skills" text NOT NULL, "userId" integer, CONSTRAINT "PK_2aa59d80bd4a194c63840d98074" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "userId" character varying NOT NULL, "profileId" integer, CONSTRAINT "REL_9466682df91534dd95e4dbaa61" UNIQUE ("profileId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "education" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "institute" character varying NOT NULL, "startYear" character varying NOT NULL, "endYear" character varying, "userId" integer, CONSTRAINT "PK_bf3d38701b3030a8ad634d43bd6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "working_experience" ADD CONSTRAINT "FK_7eed67d0328aff2a3127c2d9bc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "skillset" ADD CONSTRAINT "FK_6f92ffeb28b70d26b5371d8064f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "education" ADD CONSTRAINT "FK_723e67bde13b73c5404305feb14" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "education" DROP CONSTRAINT "FK_723e67bde13b73c5404305feb14"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9466682df91534dd95e4dbaa616"`);
        await queryRunner.query(`ALTER TABLE "skillset" DROP CONSTRAINT "FK_6f92ffeb28b70d26b5371d8064f"`);
        await queryRunner.query(`ALTER TABLE "working_experience" DROP CONSTRAINT "FK_7eed67d0328aff2a3127c2d9bc2"`);
        await queryRunner.query(`DROP TABLE "education"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "skillset"`);
        await queryRunner.query(`DROP TABLE "working_experience"`);
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
