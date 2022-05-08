import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListInstitutionUseCase } from "./ListInstitutionUseCase";

class ListInstitutionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listInstitutionUseCase = container.resolve(ListInstitutionUseCase);

    const allInstitutions = await listInstitutionUseCase.execute();

    return response.status(201).json(allInstitutions);
  }
}

export { ListInstitutionController };
