import { inject, injectable } from "tsyringe";

import { Institution } from "../../entities/Institution";
import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";

@injectable()
class ListInstitutionUseCase {
  constructor(
    @inject("InstitutionsRepository")
    private institutionRepository: IInstitutionsRepository
  ) {}

  async execute(): Promise<Institution[]> {
    const listInstitutions = await this.institutionRepository.list();
    return listInstitutions;
  }
}

export { ListInstitutionUseCase };
