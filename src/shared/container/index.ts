import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { IDepartmentsRepository } from "../../modules/institutions/repositories/IDepartmentRepository";
import { IInstitutionsRepository } from "../../modules/institutions/repositories/IInstitutionsRepository";
import { DepartmentsRepository } from "../../modules/institutions/repositories/implementations/DepartmentsRepository";
import { InstitutionsRepository } from "../../modules/institutions/repositories/implementations/InstitutionsRepository";
import { ProfessorsRepository } from "../../modules/professors/repositories/implementations/ProfessorsRepository";
import { RatingsRepository } from "../../modules/professors/repositories/implementations/RatingsRepository";
import { SubjectsRepository } from "../../modules/professors/repositories/implementations/SubjectsRepository";
import { TagsRepository } from "../../modules/professors/repositories/implementations/TagsRepository";
import { TagsTemplateRepository } from "../../modules/professors/repositories/implementations/TagsTemplateRepository";
import { IProfessorsRepository } from "../../modules/professors/repositories/IProfessorRepository";
import { IRatingsRepository } from "../../modules/professors/repositories/IRatingRepository";
import { ISubjectsRepository } from "../../modules/professors/repositories/ISubjectRepository";
import { ITagsRepository } from "../../modules/professors/repositories/ITagsRepository";
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

container.registerSingleton<ISubjectsRepository>(
  "SubjectsRepository",
  SubjectsRepository
);

container.registerSingleton<IDepartmentsRepository>(
  "DepartmentsRepository",
  DepartmentsRepository
);

container.registerSingleton<IRatingsRepository>(
  "RatingsRepository",
  RatingsRepository
);

container.registerSingleton<IProfessorsRepository>(
  "ProfessorsRepository",
  ProfessorsRepository
);

container.registerSingleton<ITagsRepository>("TagsRepository", TagsRepository);
