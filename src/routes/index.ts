import { Router } from "express";

import { institutionsRoutes } from "./institutions.routes";
import { tagsTemplateRoutes } from "./tagsTemplate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/institutions", institutionsRoutes);
router.use("/tags", tagsTemplateRoutes);
router.use("/users", usersRoutes);

export { router };
