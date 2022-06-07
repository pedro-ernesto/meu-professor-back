import { Institution } from "../../entities/Institution";
import {
  ICreateInstitutionDTO,
  IInstitutionsRepository,
} from "../IInstitutionsRepository";

class InstitutionsRepositoryInMemory implements IInstitutionsRepository {
  institutions: Institution[] = [];

  async findByName(name: string): Promise<Institution> {
    const institution = this.institutions.find(
      (institution) => institution.name === name
    );
    return institution;
  }
  async list(): Promise<Institution[]> {
    const { institutions } = this;
    return institutions;
  }
  async create({ name, abbreviation }: ICreateInstitutionDTO): Promise<void> {
    const institution = new Institution();

    Object.assign(institution, {
      name,
      abbreviation,
    });

    this.institutions.push(institution);
  }
}

export { InstitutionsRepositoryInMemory };
