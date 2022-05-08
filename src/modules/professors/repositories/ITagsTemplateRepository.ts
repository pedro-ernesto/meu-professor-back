import { TagsTemplate } from "../entities/TagsTemplate";

interface ICreateTagsTemplateDTO {
  name: string;
}

interface ITagsTemplateRepository {
  create({ name }: ICreateTagsTemplateDTO): Promise<void>;
  findByName({ name }: ICreateTagsTemplateDTO): Promise<TagsTemplate>;
  list(): Promise<TagsTemplate[]>;
}

export { ITagsTemplateRepository, ICreateTagsTemplateDTO };
