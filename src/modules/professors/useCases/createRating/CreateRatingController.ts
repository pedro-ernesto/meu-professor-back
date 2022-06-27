import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateRatingsUseCase } from "./CreateRatingUseCase";

class CreateRatingsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      overral_rating,
      teaching_rating,
      difficulty_rating,
      passed_subject,
      comment,
      professor_id,
    } = request.body;

    const createRatingsUseCase = container.resolve(CreateRatingsUseCase);

    await createRatingsUseCase.execute({
      overral_rating,
      teaching_rating,
      difficulty_rating,
      passed_subject,
      comment,
      professor_id,
    });

    return response.status(201).send();
  }
}

export { CreateRatingsController };
