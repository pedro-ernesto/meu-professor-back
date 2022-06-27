import { Router } from "express";

import { CreateProfessorController } from "../modules/professors/useCases/createProfessor/createProfessorController";
import { ListProfessorsController } from "../modules/professors/useCases/listProfessors/ListProfessorsController";

const professorsRoutes = Router();

const createProfessorController = new CreateProfessorController();

professorsRoutes.post("/", createProfessorController.handle);

const listProfessorsController = new ListProfessorsController();

professorsRoutes.get("/", listProfessorsController.handle);

export { professorsRoutes };
