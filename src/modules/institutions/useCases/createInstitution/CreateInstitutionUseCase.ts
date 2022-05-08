import { inject, injectable } from "tsyringe";

import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";

interface IRequest {
  name: string;
  abbreviation: string;
}

@injectable()
class CreateInstitutionUseCase {
  constructor(
    @inject("InstitutionsRepository")
    private institutionRepository: IInstitutionsRepository
  ) {}

  async execute({ name, abbreviation }: IRequest): Promise<void> {
    const institutionAlreadyExists =
      await this.institutionRepository.findByName(name);

    if (institutionAlreadyExists) {
      throw new Error("Institution already exists");
    }

    this.institutionRepository.create({ name, abbreviation });
  }
}

export { CreateInstitutionUseCase };
