/* eslint-disable no-use-before-define */
import { getRepository, Repository } from "typeorm";

import { Rating } from "../../entities/Rating";
import { ICreateRatingsDTO, IRatingsRepository } from "../IRatingRepository";

class RatingsRepository implements IRatingsRepository {
  private repository: Repository<Rating>;

  constructor() {
    this.repository = getRepository(Rating);
  }

  async create({
    professor_id,
    overral_rating,
    teaching_rating,
    difficulty_rating,
    passed_subject,
    comment,
  }: ICreateRatingsDTO): Promise<void> {
    const ratings = this.repository.create({
      professor_id,
      overral_rating,
      teaching_rating,
      difficulty_rating,
      passed_subject,
      comment,
    });

    await this.repository.save(ratings);
  }

  async findByProfessorId({
    professor_id,
  }: ICreateRatingsDTO): Promise<Rating[]> {
    const allRatings = this.repository.find({ professor_id });
    return allRatings;
  }
}

export { RatingsRepository };
