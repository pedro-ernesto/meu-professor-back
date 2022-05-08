import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListTagsTemplateUseCase } from "./ListTagsTemplateUseCase";

class ListTagsTemplateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listTagsTemplateUseCase = container.resolve(ListTagsTemplateUseCase);

    const allTags = await listTagsTemplateUseCase.execute();

    return response.status(201).json(allTags);
  }
}

export { ListTagsTemplateController };
