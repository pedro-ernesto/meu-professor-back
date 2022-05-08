import { inject, injectable } from "tsyringe";

import { TagsTemplate } from "../../entities/TagsTemplate";
import { ITagsTemplateRepository } from "../../repositories/ITagsTemplateRepository";

@injectable()
class ListTagsTemplateUseCase {
  constructor(
    @inject("TagsTemplateRepository")
    private tagsTemplateRepository: ITagsTemplateRepository
  ) {}

  async execute(): Promise<TagsTemplate[]> {
    const listTagsTemplate = await this.tagsTemplateRepository.list();
    return listTagsTemplate;
  }
}

export { ListTagsTemplateUseCase };
