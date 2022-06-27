import { inject, injectable } from "tsyringe";

import { IRatingsRepository } from "../../repositories/IRatingRepository";

interface IRequest {
  overral_rating: number;
  teaching_rating: number;
  difficulty_rating: number;
  passed_subject: boolean;
  comment: string;
  professor_id: string;
}

@injectable()
class CreateRatingsUseCase {
  constructor(
    @inject("RatingsRepository")
    private ratingsRepository: IRatingsRepository
  ) {}

  async execute({
    overral_rating,
    teaching_rating,
    difficulty_rating,
    passed_subject,
    comment,
    professor_id,
  }: IRequest): Promise<void> {
    await this.ratingsRepository.create({
      overral_rating,
      teaching_rating,
      difficulty_rating,
      passed_subject,
      comment,
      professor_id,
    });
  }
}

export { CreateRatingsUseCase };
