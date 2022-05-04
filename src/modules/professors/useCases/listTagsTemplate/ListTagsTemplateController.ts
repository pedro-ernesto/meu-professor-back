import { Response, Request } from "express";

import { ListTagsTemplateUseCase } from "./ListTagsTemplateUseCase";

class ListTagsTemplateController {
  constructor(private listTagsTemplateUseCase: ListTagsTemplateUseCase) {}

  handle(request: Request, response: Response): Response {
    const allTags = this.listTagsTemplateUseCase.execute();

    return response.status(201).json(allTags);
  }
}

export { ListTagsTemplateController };
