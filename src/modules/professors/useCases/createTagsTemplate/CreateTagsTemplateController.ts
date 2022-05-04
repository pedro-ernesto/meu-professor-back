import { Response, Request } from "express";

import { CreateTagsTemplateUseCase } from "./CreateTagsTemplateUseCase";

class CreateTagsTemplateController {
  constructor(private createTagsTemplateUseCase: CreateTagsTemplateUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;

    this.createTagsTemplateUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateTagsTemplateController };
