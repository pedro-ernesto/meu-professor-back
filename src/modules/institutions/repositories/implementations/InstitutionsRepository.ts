/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Institution } from "../../entities/Institution";
import {
  ICreateInstitutionDTO,
  IInstitutionsRepository,
} from "../IInstitutionsRepository";

class InstitutionsRepository implements IInstitutionsRepository {
  private repository: Repository<Institution>;

  constructor() {
    this.repository = getRepository(Institution);
  }

  async create({ name, abbreviation }: ICreateInstitutionDTO): Promise<void> {
    const institution = this.repository.create({
      name,
      abbreviation,
    });

    await this.repository.save(institution);
  }

  async list(): Promise<Institution[]> {
    const institutions = await this.repository.find();
    return institutions;
  }

  async findByName(name: string): Promise<Institution> {
    const institution = await this.repository.findOne({ name });
    return institution;
  }
}

export { InstitutionsRepository };
