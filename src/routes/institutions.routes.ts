import { Router } from "express";

import { InstitutionsRepository } from "../repositories/InstitutionsRepository";

const institutionsRoutes = Router();

const institutionRepository = new InstitutionsRepository();

institutionsRoutes.post("/institutions", (request, response) => {
  const { name, abbreviation } = request.body;

  const institutionAlreadyExists = institutionRepository.findByName(name);

  if (institutionAlreadyExists) {
    return response.status(400).json({ error: "já existe filho" });
  }

  institutionRepository.create({ name, abbreviation });

  return response.status(201).send();
});

institutionsRoutes.get("/institutions", (request, response) => {
  const all = institutionRepository.list();

  return response.status(201).json(all);
});

export { institutionsRoutes };
