/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { TagsTemplate } from "../../entities/TagsTemplate";
import {
  ICreateTagsTemplateDTO,
  ITagsTemplateRepository,
} from "../ITagsTemplateRepository";

class TagsTemplateRepository implements ITagsTemplateRepository {
  private repository: Repository<TagsTemplate>;

  constructor() {
    this.repository = getRepository(TagsTemplate);
  }

  async create({ name }: ICreateTagsTemplateDTO): Promise<void> {
    const tagsTemplate = this.repository.create({
      name,
    });

    await this.repository.save(tagsTemplate);
  }

  async findByName({ name }: ICreateTagsTemplateDTO): Promise<TagsTemplate> {
    const tagsTemplate = await this.repository.findOne({ name });
    return tagsTemplate;
  }

  async list(): Promise<TagsTemplate[]> {
    const allTags = this.repository.find();
    return allTags;
  }
}

export { TagsTemplateRepository };
