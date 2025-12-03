import { Router, Request, Response } from "express";
import { fzMembers } from "../data/fzMembers";

const router = Router();

// GET
router.get("/", (req: Request, res: Response) => {
  res.json(fzMembers);
});

export default router;
