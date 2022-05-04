import { TagsTemplate } from "../models/TagsTemplate";
import {
  ICreateTagsTemplateDTO,
  ITagsTemplateRepository,
} from "./ITagsTemplateRepository";

class TagsTemplateRepository implements ITagsTemplateRepository {
  private tagsTemplates: TagsTemplate[];

  constructor() {
    this.tagsTemplates = [];
  }

  create({ name }: ICreateTagsTemplateDTO): void {
    const tagsTemplate = new TagsTemplate();

    Object.assign(tagsTemplate, {
      name,
      created_at: new Date(),
    });

    this.tagsTemplates.push(tagsTemplate);
  }

  findByName({ name }: ICreateTagsTemplateDTO): TagsTemplate {
    const tagsTemplate = this.tagsTemplates.find(
      (tagsTemplate) => tagsTemplate.name === name
    );
    return tagsTemplate;
  }

  list(): TagsTemplate[] {
    return this.tagsTemplates;
  }
}

export { TagsTemplateRepository };
