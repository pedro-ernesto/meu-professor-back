import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListProfessorsUseCase } from "./ListProfessorsUseCase";

class ListProfessorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProfessorsUseCase = container.resolve(ListProfessorsUseCase);

    const allProfessors = await listProfessorsUseCase.execute();

    return response.status(201).json(allProfessors);
  }
}

export { ListProfessorsController };
