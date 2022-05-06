import { Institution } from "../../entities/Institution";
import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";

class ListInstitutionUseCase {
  constructor(private institutionRepository: IInstitutionsRepository) {}

  async execute(): Promise<Institution[]> {
    const listInstitutions = this.institutionRepository.list();
    return listInstitutions;
  }
}

export { ListInstitutionUseCase };
