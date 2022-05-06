import { Institution } from "../entities/Institution";

interface ICreateInstitutionDTO {
  name: string;
  abbreviation: string;
}

interface IInstitutionsRepository {
  findByName(name: string): Promise<Institution>;
  list(): Promise<Institution[]>;
  create({ name, abbreviation }: ICreateInstitutionDTO): Promise<void>;
}

export { ICreateInstitutionDTO, IInstitutionsRepository };
