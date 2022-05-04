import { TagsTemplateRepository } from "../../repositories/implementations/TagsTemplateRepository";
import { CreateTagsTemplateController } from "./CreateTagsTemplateController";
import { CreateTagsTemplateUseCase } from "./CreateTagsTemplateUseCase";

const tagsTemplateRepository = TagsTemplateRepository.getInstance();
const createTagsTemplateUseCase = new CreateTagsTemplateUseCase(
  tagsTemplateRepository
);
const createTagsTemplateController = new CreateTagsTemplateController(
  createTagsTemplateUseCase
);

export { createTagsTemplateController };
