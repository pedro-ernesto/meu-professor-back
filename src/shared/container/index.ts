import { container } from "tsyringe";

import { IInstitutionsRepository } from "../../modules/institutions/repositories/IInstitutionsRepository";
import { InstitutionsRepository } from "../../modules/institutions/repositories/implementations/InstitutionsRepository";
import { TagsTemplateRepository } from "../../modules/professors/repositories/implementations/TagsTemplateRepository";
import { ITagsTemplateRepository } from "../../modules/professors/repositories/ITagsTemplateRepository";

container.registerSingleton<IInstitutionsRepository>(
  "InstitutionsRepository",
  InstitutionsRepository
);

container.registerSingleton<ITagsTemplateRepository>(
  "TagsTemplateRepository",
  TagsTemplateRepository
);
