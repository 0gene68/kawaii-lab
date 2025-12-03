import express, { type Request, type Response } from "express";
import cors from "cors";
import teamsRouter from "./api/teams";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/teams", teamsRouter);
// app.use("/api/team", teamRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
