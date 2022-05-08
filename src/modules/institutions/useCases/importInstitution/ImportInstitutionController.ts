import { Response, Request } from "express";
import { container } from "tsyringe";

import { ImportInstitutionUseCase } from "./ImportInstitutionUseCase";

class ImportInstitutionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importInstitutionUseCase = container.resolve(
      ImportInstitutionUseCase
    );
    await importInstitutionUseCase.execute(file);

    return response.send();
  }
}

export { ImportInstitutionController };
