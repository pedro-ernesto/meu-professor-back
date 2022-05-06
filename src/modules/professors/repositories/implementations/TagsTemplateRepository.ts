/* eslint-disable no-use-before-define */
import { TagsTemplate } from "../../entities/TagsTemplate";
import {
  ICreateTagsTemplateDTO,
  ITagsTemplateRepository,
} from "../ITagsTemplateRepository";

// SINGLETON PATTERN

class TagsTemplateRepository implements ITagsTemplateRepository {
  private tagsTemplates: TagsTemplate[];
  private static INSTANCE: TagsTemplateRepository;

  private constructor() {
    this.tagsTemplates = [];
  }

  public static getInstance(): TagsTemplateRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new TagsTemplateRepository();
    }
    return this.INSTANCE;
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
