import { InstitutionsRepository } from "../../repositories/implementations/InstitutionsRepository";
import { CreateInstitutionController } from "./CreateInstitutionController";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

const institutionRepository = InstitutionsRepository.getInstance();
const createInstitutionUseCase = new CreateInstitutionUseCase(
  institutionRepository
);
const createInstitutionController = new CreateInstitutionController(
  createInstitutionUseCase
);

export { createInstitutionController };
