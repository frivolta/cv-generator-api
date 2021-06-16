import {MigrationInterface, QueryRunner} from "typeorm";

export class educationOrder1623829196732 implements MigrationInterface {
    name = 'educationOrder1623829196732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "education" ADD "order" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "publicUrl" SET DEFAULT 'IwzxFV'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "publicUrl" SET DEFAULT 'w3HRSX'`);
        await queryRunner.query(`ALTER TABLE "education" DROP COLUMN "order"`);
    }

}
