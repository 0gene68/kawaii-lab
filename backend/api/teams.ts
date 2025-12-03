import { Router, Request, Response } from "express";
import { teams } from "../data/Teams";

const router = Router();

// GET
router.get("/", (req: Request, res: Response) => {
  res.json(teams);
});

export default router;
