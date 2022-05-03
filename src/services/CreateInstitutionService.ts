import { IInstitutionsRepository } from "../repositories/IInstitutionsRepository";

interface IRequest {
  name: string;
  abbreviation: string;
}

class CreateInstitutionService {
  constructor(private institutionRepository: IInstitutionsRepository) {}

  execute({ name, abbreviation }: IRequest): void {
    const institutionAlreadyExists =
      this.institutionRepository.findByName(name);

    if (institutionAlreadyExists) {
      throw new Error("Institution already exists");
    }

    this.institutionRepository.create({ name, abbreviation });
  }
}

export { CreateInstitutionService };
