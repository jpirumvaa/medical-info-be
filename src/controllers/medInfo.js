import { onSuccess, onError } from "../utils/responses";
const nSQL = require("@nano-sql/core").nSQL;


class MedicalInfoController {
    static async findAll(req, res) {
        const { usertype } = req.user;
        const adminData = await nSQL("medical-info").query("select", ["id", "2000", "2001", "2002"]).exec();
        const result = await nSQL("medical-info").query("select", ["id", "2000", "2001", "2002"]).where(["tag", "=", usertype]).exec();
        return onSuccess(res, 200, "Medical info fetched successfully", usertype == 'admin' ? adminData : result);
    }

    static async findOne(req, res) {
        const { id } = req.params;
        const result = await nSQL("medical-info").query("select", ["id", "2000", "2001", "2002"]).where(["id", "=", id]).exec();
        return onSuccess(res, 200, "Medical info fetched successfully", result);
    }

    static async upload(req, res) {
        const { data } = req.body;
        const result = await nSQL("medical-info").query("upsert", data).exec();
        return onSuccess(res, 200, "Medical info uploaded successfully", result);
    }
}
export default MedicalInfoController;