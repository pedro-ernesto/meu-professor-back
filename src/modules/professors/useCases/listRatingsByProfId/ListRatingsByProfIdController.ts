import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListRatingsByProfIdUseCase } from "./ListRatingsByProfIdUseCase";

class ListRatingsByProfIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { professor_id } = request.body;

    const listRatingsByProfIdUseCase = container.resolve(
      ListRatingsByProfIdUseCase
    );

    const ratings = await listRatingsByProfIdUseCase.execute({ professor_id });

    return response.status(201).json(ratings);
  }
}

export { ListRatingsByProfIdController };
