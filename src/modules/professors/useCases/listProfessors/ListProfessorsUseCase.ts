import { inject, injectable } from "tsyringe";

import { Professor } from "../../entities/Professor";
import { IProfessorsRepository } from "../../repositories/IProfessorRepository";

@injectable()
class ListProfessorsUseCase {
  constructor(
    @inject("ProfessorsRepository")
    private professorsRepository: IProfessorsRepository
  ) {}

  async execute(): Promise<Professor[]> {
    const listProfessors = await this.professorsRepository.list();
    return listProfessors;
  }
}

export { ListProfessorsUseCase };
