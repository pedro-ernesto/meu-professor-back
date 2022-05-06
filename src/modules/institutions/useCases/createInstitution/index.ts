import { InstitutionsRepository } from "../../repositories/implementations/InstitutionsRepository";
import { CreateInstitutionController } from "./CreateInstitutionController";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

export default (): CreateInstitutionController => {
  const institutionRepository = new InstitutionsRepository();

  const createInstitutionUseCase = new CreateInstitutionUseCase(
    institutionRepository
  );

  const createInstitutionController = new CreateInstitutionController(
    createInstitutionUseCase
  );

  return createInstitutionController;
};
