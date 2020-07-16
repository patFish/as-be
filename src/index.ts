import express from "express";
import { PORT } from "./config/constants";
import { fleetRouter, healthRouter } from "./routes";

const app = express();
app.use(express.json());

app.use("/fleet", fleetRouter);
app.use("/health", healthRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
