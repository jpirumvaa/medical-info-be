import Router from "express";
import MedInfoController from "../controllers/medInfo";
import checkAuth from "../utils/checkAuth";
import permit from "../utils/permit";

const router = Router();

router.get("/", checkAuth.verifyUser,
    permit(["admin", "patient", "pharmacist", "physician"]),
    MedInfoController.findAll);
router.get("/:id",
    checkAuth.verifyUser,
    permit(["admin", "patient", "pharmacist", "physician"]),
    MedInfoController.findOne);
router.post("/",
    checkAuth.verifyUser,
    permit(["admin"]),
    MedInfoController.upload);

export default router;