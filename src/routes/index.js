import Router from "express";
import demoRoutes from "./welcome";
import medInfoRoutes from "./medInfo";

const router = Router();

router.use("/test", demoRoutes);
router.use("/medInfo", medInfoRoutes);

export default router;
