import { Router, type IRouter } from "express";
import { desc } from "drizzle-orm";
import { db, admissionsTable } from "@workspace/db";
import {
  CreateAdmissionBody,
  ListAdmissionsResponse,
  GetRecentAdmissionsResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/admissions", async (req, res): Promise<void> => {
  const admissions = await db
    .select()
    .from(admissionsTable)
    .orderBy(desc(admissionsTable.createdAt));
  res.json(ListAdmissionsResponse.parse(admissions.map((a) => ({ ...a, createdAt: a.createdAt.toISOString() }))));
});

router.get("/admissions/recent", async (req, res): Promise<void> => {
  const admissions = await db
    .select()
    .from(admissionsTable)
    .orderBy(desc(admissionsTable.createdAt))
    .limit(5);
  res.json(GetRecentAdmissionsResponse.parse(admissions.map((a) => ({ ...a, createdAt: a.createdAt.toISOString() }))));
});

router.post("/admissions", async (req, res): Promise<void> => {
  const parsed = CreateAdmissionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [admission] = await db
    .insert(admissionsTable)
    .values(parsed.data)
    .returning();

  res.status(201).json(admission);
});

export default router;
