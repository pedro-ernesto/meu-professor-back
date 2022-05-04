import { Router } from "express";

import { InstitutionsRepository } from "../modules/institutions/repositories/InstitutionsRepository";
import { CreateInstitutionService } from "../modules/institutions/services/CreateInstitutionService";

const institutionsRoutes = Router();

const institutionRepository = new InstitutionsRepository();

institutionsRoutes.post("/", (request, response) => {
  const { name, abbreviation } = request.body;

  const createInstitutionService = new CreateInstitutionService(
    institutionRepository
  );

  createInstitutionService.execute({ name, abbreviation });

  return response.status(201).send();
});

institutionsRoutes.get("/", (request, response) => {
  const all = institutionRepository.list();

  return response.status(201).json(all);
});

export { institutionsRoutes };
