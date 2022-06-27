import { Router } from "express";

import { authRoutes } from "./auth.routes";
import { departmentsRoutes } from "./departments.routes";
import { institutionsRoutes } from "./institutions.routes";
import { professorsRoutes } from "./professors.routes";
import { ratingsRoutes } from "./ratings.routes";
import { subjectsRoutes } from "./subjects.routes";
import { tagsTemplateRoutes } from "./tagsTemplate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/institutions", institutionsRoutes);
router.use("/professors", professorsRoutes);
router.use("/ratings", ratingsRoutes);
router.use("/tags", tagsTemplateRoutes);
router.use("/subjects", subjectsRoutes);
router.use("/departments", departmentsRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };
