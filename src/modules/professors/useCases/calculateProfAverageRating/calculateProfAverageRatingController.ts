import { Response, Request } from "express";
import { container } from "tsyringe";

import { CalculateProfAverageRatingUseCase } from "./calculateProfAverageRatingUseCase";

class CalculateProfAverageRatingController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { professor_id } = request.body;

    const calculateProfAverageRatingUseCase = container.resolve(
      CalculateProfAverageRatingUseCase
    );

    const ratings = await calculateProfAverageRatingUseCase.execute({
      professor_id,
    });

    return response.status(201).json(ratings);
  }
}

export { CalculateProfAverageRatingController };
