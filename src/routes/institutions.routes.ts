import { Router } from "express";
import multer from "multer";

import { CreateInstitutionController } from "../modules/institutions/useCases/createInstitution/CreateInstitutionController";
import { ImportInstitutionController } from "../modules/institutions/useCases/importInstitution/ImportInstitutionController";
import { ListInstitutionController } from "../modules/institutions/useCases/listInstitution/ListInstitutionController";

const institutionsRoutes = Router();

// ROTA MULTER DE UPLOAD DE ARQUIVOS

const upload = multer({
  dest: "./tmp",
});

const importInstitutionController = new ImportInstitutionController();

institutionsRoutes.post(
  "/import",
  upload.single("file"),
  importInstitutionController.handle
);

// ROTA MULTER DE UPLOAD DE ARQUIVOS

const createInstitutionController = new CreateInstitutionController();

institutionsRoutes.post("/", createInstitutionController.handle);

const listInstitutionController = new ListInstitutionController();

institutionsRoutes.get("/", listInstitutionController.handle);

export { institutionsRoutes };
