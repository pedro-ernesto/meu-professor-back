import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateTagsTemplateUseCase } from "./CreateTagsTemplateUseCase";

class CreateTagsTemplateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTagsTemplateUseCase = container.resolve(
      CreateTagsTemplateUseCase
    );

    await createTagsTemplateUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateTagsTemplateController };
