import { InstitutionsRepository } from "../../repositories/implementations/InstitutionsRepository";
import { ImportInstitutionController } from "./ImportInstitutionController";
import { ImportInstitutionUseCase } from "./ImportInstitutionUseCase";

const institutionsRepository = InstitutionsRepository.getInstance();
const importInstitutionUseCase = new ImportInstitutionUseCase(
  institutionsRepository
);
const importInstitutionController = new ImportInstitutionController(
  importInstitutionUseCase
);

export { importInstitutionController };
