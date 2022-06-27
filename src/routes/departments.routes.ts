import { Router } from "express";

import { CreateDepartmentController } from "../modules/professors/useCases/createDepartment/CreateDepartmentController";

const departmentsRoutes = Router();

const createDepartmentController = new CreateDepartmentController();

departmentsRoutes.post("/", createDepartmentController.handle);

export { departmentsRoutes };
