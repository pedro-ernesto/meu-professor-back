import { Rating } from "../entities/Rating";

interface ICreateRatingsDTO {
  professor_id: string;
  overral_rating?: number;
  teaching_rating?: number;
  difficulty_rating?: number;
  passed_subject?: boolean;
  comment?: string;
}

interface IRatingsRepository {
  create({
    professor_id,
    overral_rating,
    teaching_rating,
    difficulty_rating,
    passed_subject,
    comment,
  }: ICreateRatingsDTO): Promise<void>;
  findByProfessorId({ professor_id }: ICreateRatingsDTO): Promise<Rating[]>;
}

export { IRatingsRepository, ICreateRatingsDTO };
