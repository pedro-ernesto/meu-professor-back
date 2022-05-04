import { TagsTemplate } from "../models/TagsTemplate";

interface ICreateTagsTemplateDTO {
  name: string;
}

interface ITagsTemplateRepository {
  create({ name }: ICreateTagsTemplateDTO);
  findByName({ name }: ICreateTagsTemplateDTO);
  list(): TagsTemplate[];
}

export { ITagsTemplateRepository, ICreateTagsTemplateDTO };
