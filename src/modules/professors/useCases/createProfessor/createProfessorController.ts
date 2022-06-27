import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateProfessorUseCase } from "./createProfessorUseCase";

class CreateProfessorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, institution_id, department_id, subject_id } = request.body;

    const createProfessorUseCase = container.resolve(CreateProfessorUseCase);

    await createProfessorUseCase.execute({
      name,
      institution_id,
      department_id,
      subject_id,
    });

    return response.status(201).send();
  }
}

export { CreateProfessorController };
