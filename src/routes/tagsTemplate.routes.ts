import { Router } from "express";

import { CreateTagsTemplateController } from "../modules/professors/useCases/createTagsTemplate/CreateTagsTemplateController";
import { ListTagsTemplateController } from "../modules/professors/useCases/listTagsTemplate/ListTagsTemplateController";

const tagsTemplateRoutes = Router();

const createTagsTemplateController = new CreateTagsTemplateController();

tagsTemplateRoutes.post("/template", createTagsTemplateController.handle);

const listTagsTemplateController = new ListTagsTemplateController();

tagsTemplateRoutes.get("/template", listTagsTemplateController.handle);

export { tagsTemplateRoutes };
