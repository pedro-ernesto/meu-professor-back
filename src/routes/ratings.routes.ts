import { Router } from "express";

import { CalculateProfAverageRatingController } from "../modules/professors/useCases/calculateProfAverageRating/calculateProfAverageRatingController";
import { CreateRatingsController } from "../modules/professors/useCases/createRating/CreateRatingController";
import { ListRatingsByProfIdController } from "../modules/professors/useCases/listRatingsByProfId/ListRatingsByProfIdController";

const ratingsRoutes = Router();

const createRatingsController = new CreateRatingsController();

ratingsRoutes.post("/", createRatingsController.handle);

const listRatingsController = new ListRatingsByProfIdController();

ratingsRoutes.get("/", listRatingsController.handle);

const calculateProfAverageRating = new CalculateProfAverageRatingController();

ratingsRoutes.get("/average", calculateProfAverageRating.handle);

export { ratingsRoutes };
