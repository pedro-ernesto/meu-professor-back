import { inject, injectable } from "tsyringe";

import { ITagsTemplateRepository } from "../../repositories/ITagsTemplateRepository";

interface IRequest {
  name: string;
}

@injectable()
class CreateTagsTemplateUseCase {
  constructor(
    @inject("TagsTemplateRepository")
    private tagsTemplateRepository: ITagsTemplateRepository
  ) {}

  async execute({ name }: IRequest): Promise<void> {
    const tagsTemplateExists = await this.tagsTemplateRepository.findByName({
      name,
    });
    if (tagsTemplateExists) {
      throw new Error("Tag already exists");
    }
    await this.tagsTemplateRepository.create({ name });
  }
}

export { CreateTagsTemplateUseCase };
