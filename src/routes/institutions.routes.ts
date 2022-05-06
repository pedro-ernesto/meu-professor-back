import { Router } from "express";
import multer from "multer";

import createInstitutionController from "../modules/institutions/useCases/createInstitution";
import { importInstitutionController } from "../modules/institutions/useCases/importInstitution";
import { listInstitutionController } from "../modules/institutions/useCases/listInstitution";

const institutionsRoutes = Router();

// ROTA MULTER DE UPLOAD DE ARQUIVOS

const upload = multer({
  dest: "./tmp",
});

institutionsRoutes.post(
  "/import",
  upload.single("file"),
  (request, response) => {
    return importInstitutionController.handle(request, response);
  }
);

// ROTA MULTER DE UPLOAD DE ARQUIVOS

institutionsRoutes.post("/", (request, response) => {
  return createInstitutionController().handle(request, response);
});

institutionsRoutes.get("/", (request, response) => {
  return listInstitutionController.handle(request, response);
});

export { institutionsRoutes };
