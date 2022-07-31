import Router from "express";
import MedInfoController from "../controllers/medInfo";

const router = Router();

router.get("/", MedInfoController.findAll);
router.get("/:id", MedInfoController.findOne);
router.post("/", MedInfoController.upload);

export default router;