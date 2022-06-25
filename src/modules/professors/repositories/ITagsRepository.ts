import { Tags } from "../entities/Tags";

interface ICreateTagsDTO {
  name?: string;
  professor_id: string;
}

interface ITagsRepository {
  create({ name, professor_id }: ICreateTagsDTO): Promise<void>;
  findByProfessorId({ professor_id }: ICreateTagsDTO): Promise<Tags[]>;
}

export { ITagsRepository, ICreateTagsDTO };
