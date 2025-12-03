import express, { type Request, type Response } from "express";
import cors from "cors";
import { fzMembers } from "./data/fzMembers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", (req: Request, res: Response) => {
  res.json(fzMembers);
});

// app.post("/api/users", (req: Request, res: Response) => {
//   const newUser: Member = { id: users.length + 1, ...req.body };
//   users.push(newUser);
//   res.json(newUser);
// });

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
