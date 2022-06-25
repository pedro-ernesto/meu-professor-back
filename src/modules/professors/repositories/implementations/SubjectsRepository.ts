/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Subject } from "../../entities/Subject";
import { ISubjectDTO, ISubjectsRepository } from "../ISubjectRepository";

class SubjectsRepository implements ISubjectsRepository {
  private repository: Repository<Subject>;

  constructor() {
    this.repository = getRepository(Subject);
  }

  async create({ name }: ISubjectDTO): Promise<void> {
    const subjects = this.repository.create({
      name,
    });

    await this.repository.save(subjects);
  }

  async findById({ id }: ISubjectDTO): Promise<Subject> {
    const subject = this.repository.findOne({ id });
    return subject;
  }
}

export { SubjectsRepository };
