import {MigrationInterface, QueryRunner} from "typeorm";

export class orderToEntities1623872263505 implements MigrationInterface {
    name = 'orderToEntities1623872263505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "working_experience" ADD "order" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "skillset" ADD "order" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "publicUrl" SET DEFAULT 'i33Pdu'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "publicUrl" SET DEFAULT 'IwzxFV'`);
        await queryRunner.query(`ALTER TABLE "skillset" DROP COLUMN "order"`);
        await queryRunner.query(`ALTER TABLE "working_experience" DROP COLUMN "order"`);
    }

}
