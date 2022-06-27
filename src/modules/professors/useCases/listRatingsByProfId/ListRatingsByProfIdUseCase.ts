import { inject, injectable } from "tsyringe";

import { Rating } from "../../entities/Rating";
import { IRatingsRepository } from "../../repositories/IRatingRepository";

interface IRequest {
  professor_id: string;
}

@injectable()
class ListRatingsByProfIdUseCase {
  constructor(
    @inject("RatingsRepository")
    private ratingsRepository: IRatingsRepository
  ) {}

  async execute({ professor_id }: IRequest): Promise<Rating[]> {
    const listRatings = await this.ratingsRepository.findByProfessorId({
      professor_id,
    });
    return listRatings;
  }
}

export { ListRatingsByProfIdUseCase };
