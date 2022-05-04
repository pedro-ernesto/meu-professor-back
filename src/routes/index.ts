import { Router } from "express";

import { institutionsRoutes } from "./institutions.routes";
import { tagsTemplateRoutes } from "./tagsTemplate.routes";

const router = Router();

router.use("/institutions", institutionsRoutes);
router.use("/tags", tagsTemplateRoutes);

export { router };
