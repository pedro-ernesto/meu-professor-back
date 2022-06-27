import { inject, injectable } from "tsyringe";

import { ISubjectsRepository } from "../../repositories/ISubjectRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateSubjectUseCase {
  constructor(
    @inject("SubjectsRepository")
    private subjectsRepository: ISubjectsRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    await this.subjectsRepository.create({ name });
  }
}

export { CreateSubjectUseCase };
