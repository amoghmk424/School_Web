import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const admissionsTable = pgTable("admissions", {
  id: serial("id").primaryKey(),
  studentName: text("student_name").notNull(),
  parentName: text("parent_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  course: text("course").notNull(),
  message: text("message"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertAdmissionSchema = createInsertSchema(admissionsTable).omit({
  id: true,
  createdAt: true,
  status: true,
});
export type InsertAdmission = z.infer<typeof insertAdmissionSchema>;
export type Admission = typeof admissionsTable.$inferSelect;
