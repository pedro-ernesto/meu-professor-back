import { ITagsTemplateRepository } from "../../repositories/ITagsTemplateRepository";

interface IRequest {
  name: string;
}

class CreateTagsTemplateUseCase {
  constructor(private tagsTemplateRepository: ITagsTemplateRepository) {}

  execute({ name }: IRequest) {
    const tagsTemplateExists = this.tagsTemplateRepository.findByName({ name });
    if (tagsTemplateExists) {
      throw new Error("Tag already exists");
    }
    this.tagsTemplateRepository.create({ name });
  }
}

export { CreateTagsTemplateUseCase };
