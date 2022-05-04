import { Response, Request } from "express";

import { ImportInstitutionUseCase } from "./ImportInstitutionUseCase";

class ImportInstitutionController {
  constructor(private importInstitutionUseCase: ImportInstitutionUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importInstitutionUseCase.execute(file);

    return response.send();
  }
}

export { ImportInstitutionController };
