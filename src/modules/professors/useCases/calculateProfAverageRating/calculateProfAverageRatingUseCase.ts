/* eslint-disable @typescript-eslint/naming-convention */
import { inject, injectable } from "tsyringe";

import { IRatingsRepository } from "../../repositories/IRatingRepository";

interface IRequest {
  professor_id: string;
}

interface CountAndAverage {
  0: number;
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  average: number;
}

interface RatingsArr {
  overral: CountAndAverage;
  teaching: CountAndAverage;
  difficulty: CountAndAverage;
}

@injectable()
class CalculateProfAverageRatingUseCase {
  constructor(
    @inject("RatingsRepository")
    private ratingsRepository: IRatingsRepository
  ) {}

  async execute({ professor_id }: IRequest): Promise<RatingsArr> {
    const listRatings = await this.ratingsRepository.findByProfessorId({
      professor_id,
    });

    const counts = {
      overral: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        average: 0,
      },
      teaching: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        average: 0,
      },
      difficulty: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        average: 0,
      },
    } as RatingsArr;

    listRatings.forEach((element) => {
      counts.overral[element.overral_rating] += 1;

      counts.teaching[element.teaching_rating] += 1;

      counts.difficulty[element.difficulty_rating] += 1;
    });

    counts.difficulty.average =
      (counts.difficulty[1] +
        counts.difficulty[2] * 2 +
        counts.difficulty[3] * 3 +
        counts.difficulty[4] * 4 +
        counts.difficulty[5] * 5) /
      (counts.difficulty[0] +
        counts.difficulty[1] +
        counts.difficulty[2] +
        counts.difficulty[3] +
        counts.difficulty[4] +
        counts.difficulty[5]);

    counts.overral.average =
      (counts.overral[1] +
        counts.overral[2] * 2 +
        counts.overral[3] * 3 +
        counts.overral[4] * 4 +
        counts.overral[5] * 5) /
      (counts.overral[0] +
        counts.overral[1] +
        counts.overral[2] +
        counts.overral[3] +
        counts.overral[4] +
        counts.overral[5]);

    counts.teaching.average =
      (counts.teaching[1] +
        counts.teaching[2] * 2 +
        counts.teaching[3] * 3 +
        counts.teaching[4] * 4 +
        counts.teaching[5] * 5) /
      (counts.teaching[0] +
        counts.teaching[1] +
        counts.teaching[2] +
        counts.teaching[3] +
        counts.teaching[4] +
        counts.teaching[5]);

    return counts;
  }
}

export { CalculateProfAverageRatingUseCase };
