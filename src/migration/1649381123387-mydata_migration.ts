import {MigrationInterface, QueryRunner} from "typeorm";

export class mydataMigration1649381123387 implements MigrationInterface {
    name = 'mydataMigration1649381123387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mydata" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(20) NOT NULL, "pass" varchar(100) NOT NULL, "mail" varchar(100), "age" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "mydata"`);
    }

}
