import { Router } from "express";

import { InstitutionsRepository } from "../repositories/InstitutionsRepository";
import { CreateInstitutionService } from "../services/CreateInstitutionService";

const institutionsRoutes = Router();

const institutionRepository = new InstitutionsRepository();

institutionsRoutes.post("/institutions", (request, response) => {
  const { name, abbreviation } = request.body;

  const createInstitutionService = new CreateInstitutionService(
    institutionRepository
  );

  createInstitutionService.execute({ name, abbreviation });

  return response.status(201).send();
});

institutionsRoutes.get("/institutions", (request, response) => {
  const all = institutionRepository.list();

  return response.status(201).json(all);
});

export { institutionsRoutes };
