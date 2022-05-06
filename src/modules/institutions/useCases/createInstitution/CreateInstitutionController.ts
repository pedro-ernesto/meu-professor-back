import { Response, Request } from "express";

import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

class CreateInstitutionController {
  constructor(private createInstitutionUseCase: CreateInstitutionUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, abbreviation } = request.body;

    await this.createInstitutionUseCase.execute({ name, abbreviation });

    return response.status(201).send();
  }
}

export { CreateInstitutionController };
