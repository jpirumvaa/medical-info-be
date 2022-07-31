import Router from "express";
import WelcomeController from "../controllers/welcome";

const router = Router();

router.get("/", WelcomeController.welcome);

export default router;