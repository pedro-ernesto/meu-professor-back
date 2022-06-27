import { inject, injectable } from "tsyringe";

import { IProfessorsRepository } from "../../repositories/IProfessorRepository";

interface IRequest {
  name: string;
  institution_id: string;
  department_id: string;
  subject_id: string;
}

@injectable()
class CreateProfessorUseCase {
  constructor(
    @inject("ProfessorsRepository")
    private professorsRepository: IProfessorsRepository
  ) {}

  async execute({
    name,
    institution_id,
    department_id,
    subject_id,
  }: IRequest): Promise<void> {
    await this.professorsRepository.create({
      name,
      institution_id,
      department_id,
      subject_id,
    });
  }
}

export { CreateProfessorUseCase };
