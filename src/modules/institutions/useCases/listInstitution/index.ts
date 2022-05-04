import { InstitutionsRepository } from "../../repositories/implementations/InstitutionsRepository";
import { ListInstitutionController } from "./ListInstitutionController";
import { ListInstitutionUseCase } from "./ListInstitutionUseCase";

const institutionRepository = InstitutionsRepository.getInstance();
const listInstitutionUseCase = new ListInstitutionUseCase(
  institutionRepository
);
const listInstitutionController = new ListInstitutionController(
  listInstitutionUseCase
);

export { listInstitutionController };
