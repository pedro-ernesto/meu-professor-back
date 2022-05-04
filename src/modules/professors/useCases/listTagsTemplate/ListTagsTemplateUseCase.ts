import { TagsTemplate } from "../../models/TagsTemplate";
import { ITagsTemplateRepository } from "../../repositories/ITagsTemplateRepository";

class ListTagsTemplateUseCase {
  constructor(private tagsTemplateRepository: ITagsTemplateRepository) {}

  execute(): TagsTemplate[] {
    const listTagsTemplate = this.tagsTemplateRepository.list();
    return listTagsTemplate;
  }
}

export { ListTagsTemplateUseCase };
