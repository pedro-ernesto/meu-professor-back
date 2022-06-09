import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRatings1654811329571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ratings",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "overral_rating",
            type: "int",
          },
          {
            name: "teaching_rating",
            type: "int",
          },
          {
            name: "difficulty_rating",
            type: "int",
          },
          {
            name: "passed_subject",
            type: "boolean",
            isNullable: true,
          },

          {
            name: "comment",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "professor_id",
            type: "uuid",
            isNullable: true,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKProfessor",
            referencedTableName: "professors",
            referencedColumnNames: ["id"],
            columnNames: ["professor_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ratings");
  }
}
