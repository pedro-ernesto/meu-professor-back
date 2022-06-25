/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Department } from "../../entities/Department";
import {
  IDepartmentsDTO,
  IDepartmentsRepository,
} from "../IDepartmentRepository";

class DepartmentsRepository implements IDepartmentsRepository {
  private repository: Repository<Department>;

  constructor() {
    this.repository = getRepository(Department);
  }

  async create({ name, institution_id }: IDepartmentsDTO): Promise<void> {
    const department = this.repository.create({
      name,
      institution_id,
    });

    await this.repository.save(department);
  }

  async findByInstitutionId({
    institution_id,
  }: IDepartmentsDTO): Promise<Department[]> {
    const departments = this.repository.find({ institution_id });
    return departments;
  }
}

export { DepartmentsRepository };
