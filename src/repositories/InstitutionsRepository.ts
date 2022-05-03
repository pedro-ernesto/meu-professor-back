import { Institution } from "../models/Institution";

interface ICreateCategoryDTO {
  name: string;
  abbreviation: string;
}

class InstitutionsRepository {
  private institutions: Institution[];

  constructor() {
    this.institutions = [];
  }

  create({ name, abbreviation }: ICreateCategoryDTO): void {
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
