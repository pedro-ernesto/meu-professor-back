import { parse as csvParse } from "csv-parse";
import fs from "fs";

import { IInstitutionsRepository } from "../../repositories/IInstitutionsRepository";

interface IImportInstitution {
  name: string;
  abbreviation: string;
}

class ImportInstitutionUseCase {
  constructor(private institutionsRepository: IInstitutionsRepository) {}

  loadInstitutions(file: Express.Multer.File): Promise<IImportInstitution[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const institutions: IImportInstitution[] = [];

      const parseFile = csvParse();
      // pega o que foi lido no streaming e joga pra outro lugar
      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, abbreviation] = line;
          institutions.push({
            name,
            abbreviation,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(institutions);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const institutions = await this.loadInstitutions(file);
    institutions.map(async (institution) => {
      const { name, abbreviation } = institution;

      const institutionExists = this.institutionsRepository.findByName(name);

      if (!institutionExists) {
        this.institutionsRepository.create({
          name,
          abbreviation,
        });
      }
    });
  }
}

export { ImportInstitutionUseCase };
