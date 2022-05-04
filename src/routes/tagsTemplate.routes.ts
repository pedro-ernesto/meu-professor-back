import { Router } from "express";

import { TagsTemplateRepository } from "../modules/professors/repositories/TagsTemplateRepository";
import { CreateTagsTemplate } from "../modules/professors/services/CreateTagsTemplateService";

const tagsTemplateRoutes = Router();

const tagsTemplateRepository = new TagsTemplateRepository();

tagsTemplateRoutes.post("/template", (request, response) => {
  const { name } = request.body;

  const createTagsTemplate = new CreateTagsTemplate(tagsTemplateRepository);

  createTagsTemplate.execute({ name });

  return response.status(201).send();
});

tagsTemplateRoutes.get("/template", (request, response) => {
  const all = tagsTemplateRepository.list();

  return response.status(201).json(all);
});

export { tagsTemplateRoutes };
