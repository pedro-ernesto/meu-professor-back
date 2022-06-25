/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Professor } from "../../entities/Professor";
import {
  ICreateProfessorsDTO,
  IProfessorsRepository,
} from "../IProfessorRepository";

class ProfessorsRepository implements IProfessorsRepository {
  private repository: Repository<Professor>;

  constructor() {
    this.repository = getRepository(Professor);
  }

  async create({
    name,
    subject_id,
    department_id,
    institution_id,
  }: ICreateProfessorsDTO): Promise<void> {
    const professor = this.repository.create({
      name,
      subject_id,
      department_id,
      institution_id,
    });

    await this.repository.save(professor);
  }

  async findById({ id }: ICreateProfessorsDTO): Promise<Professor> {
    const professor = this.repository.findOne({ id });
    return professor;
  }

  async list(): Promise<Professor[]> {
    const professor = this.repository.find();
    return professor;
  }

  async findByInstitutionId({
    institution_id,
  }: ICreateProfessorsDTO): Promise<Professor[]> {
    const professors = this.repository.find({ institution_id });
    return professors;
  }
}

export { ProfessorsRepository };
