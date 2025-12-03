import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// TS 타입 지정
export interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/api/users", (req: Request, res: Response) => {
  res.json(users);
});

app.post("/api/users", (req: Request, res: Response) => {
  const newUser: User = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.json(newUser);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
