import express from "express";

import { institutionsRoutes } from "./routes/institutions.routes";

const app = express();

app.use(express.json());

app.use(institutionsRoutes);

app.listen(3333, () => console.log("Server is running!"));
