import { Response, Request } from "express";

import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

class CreateInstitutionController {
  constructor(private createTagsTemplateUseCase: CreateInstitutionUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, abbreviation } = request.body;

    this.createTagsTemplateUseCase.execute({ name, abbreviation });

    return response.status(201).send();
  }
}

export { CreateInstitutionController };
