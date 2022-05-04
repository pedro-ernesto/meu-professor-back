import { Response, Request } from "express";

import { ListInstitutionUseCase } from "./ListInstitutionUseCase";

class ListInstitutionController {
  constructor(private listInstitutionUseCase: ListInstitutionUseCase) {}

  handle(request: Request, response: Response): Response {
    const allInstitutions = this.listInstitutionUseCase.execute();

    return response.status(201).json(allInstitutions);
  }
}

export { ListInstitutionController };
