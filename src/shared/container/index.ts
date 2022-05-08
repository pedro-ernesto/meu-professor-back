import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
