import express from "express"
import jobController from"../controllers/job.controller.js"

const router = express.Router();

router.post("/", jobController.createjob);
router.get("/", jobController.getAlljobs);
router.get("/:id", jobController.getjobById);
router.put("/:id", jobController.updatejob);
router.delete("/:id", jobController.deletejob);

export default router;
