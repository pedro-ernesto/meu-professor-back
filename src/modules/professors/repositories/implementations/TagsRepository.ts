/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Tags } from "../../entities/Tags";
import { ICreateTagsDTO, ITagsRepository } from "../ITagsRepository";

class TagsRepository implements ITagsRepository {
  private repository: Repository<Tags>;

  constructor() {
    this.repository = getRepository(Tags);
  }

  async create({ name, professor_id }: ICreateTagsDTO): Promise<void> {
    const tags = this.repository.create({
      name,
      professor_id,
    });

    await this.repository.save(tags);
  }

  async findByProfessorId({ professor_id }: ICreateTagsDTO): Promise<Tags[]> {
    const allTags = this.repository.find({ professor_id });
    return allTags;
  }
}

export { TagsRepository };
