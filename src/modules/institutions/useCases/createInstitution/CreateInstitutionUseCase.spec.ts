import { AppError } from "../../../../errors/AppError";
import { InstitutionsRepositoryInMemory } from "../../repositories/in-memory/InstitutionsRepositoryInMemory";
import { CreateInstitutionUseCase } from "./CreateInstitutionUseCase";

let createInstitutionUseCase: CreateInstitutionUseCase;
let institutionsRepositoryInMemory: InstitutionsRepositoryInMemory;

describe("Create Institution", () => {
  beforeEach(() => {
    institutionsRepositoryInMemory = new InstitutionsRepositoryInMemory();
    createInstitutionUseCase = new CreateInstitutionUseCase(
      institutionsRepositoryInMemory
    );
  });
  it("Should be able to create a new Institution", async () => {
    const institution = {
      name: "Institution Test",
      abbreviation: "Inst Test",
    };
    await createInstitutionUseCase.execute({
      name: institution.name,
      abbreviation: institution.abbreviation,
    });

    const institutionCreated = await institutionsRepositoryInMemory.findByName(
      institution.name
    );
    expect(institutionCreated).toHaveProperty("id");
  });

  it("Should not be able to create a Institution with duplicate name", async () => {
    expect(async () => {
      const institution = {
        name: "Institution Test",
        abbreviation: "Inst Test",
      };
      await createInstitutionUseCase.execute({
        name: institution.name,
        abbreviation: institution.abbreviation,
      });

      await createInstitutionUseCase.execute({
        name: institution.name,
        abbreviation: institution.abbreviation,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
