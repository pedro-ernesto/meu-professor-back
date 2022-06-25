import { Subject } from "../entities/Subject";

interface ISubjectDTO {
  name?: string;
  id?: string;
}

interface ISubjectsRepository {
  create({ name }: ISubjectDTO): Promise<void>;
  findById({ id }: ISubjectDTO): Promise<Subject>;
}

export { ISubjectsRepository, ISubjectDTO };
