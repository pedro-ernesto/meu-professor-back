import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProfessors1654810963357 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "professors",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "institution_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "subject_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "department_id",
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
            name: "FKInstitution",
            referencedTableName: "institutions",
            referencedColumnNames: ["id"],
            columnNames: ["institution_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKSubject",
            referencedTableName: "subjects",
            referencedColumnNames: ["id"],
            columnNames: ["subject_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKDepartment",
            referencedTableName: "departments",
            referencedColumnNames: ["id"],
            columnNames: ["department_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("professors");
  }
}
