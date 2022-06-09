import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTags1654811180148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tags",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "professor_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "tags_template_id",
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
          {
            name: "FKTagsTemplate",
            referencedTableName: "tagstemplate",
            referencedColumnNames: ["id"],
            columnNames: ["tags_template_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tags");
  }
}
