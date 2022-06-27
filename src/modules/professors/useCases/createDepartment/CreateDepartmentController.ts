import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateDepartmentUseCase } from "./CreateDepartmentUseCase";

class CreateDepartmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, institution_id } = request.body;

    const createDepartmentUseCase = container.resolve(CreateDepartmentUseCase);

    await createDepartmentUseCase.execute({ name, institution_id });

    return response.status(201).send();
  }
}

export { CreateDepartmentController };
