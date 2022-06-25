import { Professor } from "../entities/Professor";

interface ICreateProfessorsDTO {
  name?: string;
  id?: string;
  institution_id?: string;
  department_id?: string;
  subject_id?: string;
}

interface IProfessorsRepository {
  create({
    name,
    institution_id,
    department_id,
    subject_id,
  }: ICreateProfessorsDTO): Promise<void>;

  findById({ id }: ICreateProfessorsDTO): Promise<Professor>;

  list(): Promise<Professor[]>;

  findByInstitutionId({
    institution_id,
  }: ICreateProfessorsDTO): Promise<Professor[]>;
}

export { IProfessorsRepository, ICreateProfessorsDTO };
