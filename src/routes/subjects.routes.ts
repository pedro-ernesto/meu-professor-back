import { Router } from "express";

import { CreateSubjectController } from "../modules/professors/useCases/createSubject/CreateSubjectController";

const subjectsRoutes = Router();

const createSubjectsController = new CreateSubjectController();

subjectsRoutes.post("/", createSubjectsController.handle);

export { subjectsRoutes };
