import { Router } from "express";

import { createTagsTemplateController } from "../modules/professors/useCases/createTagsTemplate";
import { listTagsTemplateController } from "../modules/professors/useCases/listTagsTemplate";

const tagsTemplateRoutes = Router();

tagsTemplateRoutes.post("/template", (request, response) => {
  return createTagsTemplateController.handle(request, response);
});

tagsTemplateRoutes.get("/template", (request, response) => {
  return listTagsTemplateController.handle(request, response);
});

export { tagsTemplateRoutes };
