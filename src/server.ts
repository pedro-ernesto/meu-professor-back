import express from "express";

import { institutionsRoutes } from "./routes/institutions.routes";
import { tagsTemplateRoutes } from "./routes/tagsTemplate.routes";

const app = express();

app.use(express.json());

app.use("/institutions", institutionsRoutes);
app.use("/tags", tagsTemplateRoutes);

app.listen(3333, () => console.log("Server is running!"));
