import { Router, type IRouter } from "express";
import healthRouter from "./health";
import admissionsRouter from "./admissions";
import contactsRouter from "./contacts";
import testimonialsRouter from "./testimonials";
import dashboardRouter from "./dashboard";

const router: IRouter = Router();

router.use(healthRouter);
router.use(admissionsRouter);
router.use(contactsRouter);
router.use(testimonialsRouter);
router.use(dashboardRouter);

export default router;
