/* eslint-disable no-use-before-define */
import { Institution } from "../../models/Institution";
import {
  ICreateInstitutionDTO,
  IInstitutionsRepository,
} from "../IInstitutionsRepository";

class InstitutionsRepository implements IInstitutionsRepository {
  private institutions: Institution[];
  private static INSTANCE: InstitutionsRepository;

  private constructor() {
    this.institutions = [];
  }

  public static getInstance(): InstitutionsRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new InstitutionsRepository();
    }
    return this.INSTANCE;
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
