import { Router } from "express";

import { authRoutes } from "./auth.routes";
import { institutionsRoutes } from "./institutions.routes";
import { tagsTemplateRoutes } from "./tagsTemplate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/institutions", institutionsRoutes);
router.use("/tags", tagsTemplateRoutes);
router.use("/users", usersRoutes);
router.use(authRoutes);

export { router };
