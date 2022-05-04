import { Institution } from "../../models/Institution";
import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";

class ListInstitutionUseCase {
  constructor(private institutionRepository: IInstitutionsRepository) {}

  execute(): Institution[] {
    const listInstitutions = this.institutionRepository.list();
    return listInstitutions;
  }
}

export { ListInstitutionUseCase };
