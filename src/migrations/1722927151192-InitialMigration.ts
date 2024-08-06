import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1722927151192 implements MigrationInterface {
    name = 'InitialMigration1722927151192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "record" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "value" character varying(300), "color" character varying(7) DEFAULT '#ff0000', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "dictionaryId" integer, CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dictionary" ("id" SERIAL NOT NULL, "name" character varying(30) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d17df343bd5d01ed62dd0e55e4a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "record" ADD CONSTRAINT "FK_83777a5debf2f272c6f9478899e" FOREIGN KEY ("dictionaryId") REFERENCES "dictionary"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "record" DROP CONSTRAINT "FK_83777a5debf2f272c6f9478899e"`);
        await queryRunner.query(`DROP TABLE "dictionary"`);
        await queryRunner.query(`DROP TABLE "record"`);
    }

}
