import { Department } from "../entities/Department";

interface IDepartmentsDTO {
  name?: string;
  institution_id?: string;
}

interface IDepartmentsRepository {
  create({ name, institution_id }: IDepartmentsDTO): Promise<void>;
  findByInstitutionId({
    institution_id,
  }: IDepartmentsDTO): Promise<Department[]>;
}

export { IDepartmentsRepository, IDepartmentsDTO };
