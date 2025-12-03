// routes/teams.ts
import { Router, Request, Response } from "express";
import { teamsData } from "../data/teamsData";

const router = Router();

// /api/teams/:teamId
router.get("/:teamId", (req: Request, res: Response) => {
  const { teamId } = req.params;

  const data = teamsData[teamId];

  if (!data) {
    return res.status(404).json({ error: "Team Not Found" });
  }

  return res.json(data);
});

export default router;
