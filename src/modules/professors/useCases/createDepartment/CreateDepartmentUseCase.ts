import { inject, injectable } from "tsyringe";

import { IDepartmentsRepository } from "../../../institutions/repositories/IDepartmentRepository";

interface IRequest {
  name: string;
  institution_id: string;
}

@injectable()
class CreateDepartmentUseCase {
  constructor(
    @inject("DepartmentsRepository")
    private departmentsRepository: IDepartmentsRepository
  ) {}

  async execute({ name, institution_id }: IRequest): Promise<void> {
    await this.departmentsRepository.create({ name, institution_id });
  }
}

export { CreateDepartmentUseCase };
