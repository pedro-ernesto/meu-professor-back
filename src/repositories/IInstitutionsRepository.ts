import { Institution } from "../models/Institution";

interface ICreateInstitutionDTO {
  name: string;
  abbreviation: string;
}

interface IInstitutionsRepository {
  findByName(name: string): Institution;
  list(): Institution[];
  create({ name, abbreviation }: ICreateInstitutionDTO): void;
}

export { ICreateInstitutionDTO, IInstitutionsRepository };
