import { Institution } from "../models/Institution";
import {
  ICreateInstitutionDTO,
  IInstitutionsRepository,
} from "./IInstitutionsRepository";

class InstitutionsRepository implements IInstitutionsRepository {
  private institutions: Institution[];

  constructor() {
    this.institutions = [];
  }

  create({ name, abbreviation }: ICreateInstitutionDTO): void {
    const institution = new Institution();

    Object.assign(institution, {
      name,
      abbreviation,
      created_at: new Date(),
      update_at: new Date(),
    });

    this.institutions.push(institution);
  }

  list(): Institution[] {
    return this.institutions;
  }

  findByName(name: string): Institution {
    const institution = this.institutions.find(
      (institution) => institution.name === name
    );
    return institution;
  }
}

export { InstitutionsRepository };
