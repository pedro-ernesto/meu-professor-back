import { Router } from "express";

import { createInstitutionController } from "../modules/institutions/useCases/createInstitution";
import { listInstitutionController } from "../modules/institutions/useCases/listInstitution";

const institutionsRoutes = Router();

institutionsRoutes.post("/", (request, response) => {
  return createInstitutionController.handle(request, response);
});

institutionsRoutes.get("/", (request, response) => {
  return listInstitutionController.handle(request, response);
});

export { institutionsRoutes };
