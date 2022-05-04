import { TagsTemplateRepository } from "../../repositories/implementations/TagsTemplateRepository";
import { ListTagsTemplateController } from "./ListTagsTemplateController";
import { ListTagsTemplateUseCase } from "./ListTagsTemplateUseCase";

const tagsTemplateRepository = TagsTemplateRepository.getInstance();
const listTagsTemplateUseCase = new ListTagsTemplateUseCase(
  tagsTemplateRepository
);
const listTagsTemplateController = new ListTagsTemplateController(
  listTagsTemplateUseCase
);

export { listTagsTemplateController };
