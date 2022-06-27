import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateSubjectUseCase } from "./CreateSubjectUseCase";

class CreateSubjectController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSubjectsUseCase = container.resolve(CreateSubjectUseCase);

    await createSubjectsUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateSubjectController };
