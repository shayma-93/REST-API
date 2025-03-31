import jobService from "../services/job.service.js"
class JobController {
    async createjob(req, res) {
        try {
            const job = await jobService.createjob(req.body);
            res.status(201).json(job);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAlljobs(req, res) {
        try {
            const jobs = await jobService.getAlljobs();
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getjobById(req, res) {
        try {
            const job = await jobService.getjobById(req.params.id);
            if (!job) return res.status(404).json({ message: "job not found" });
            res.json(job);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updatejob(req, res) {
        try {
            const updatedjob = await jobService.updatejob(req.params.id, req.body);
            if (!updatedjob) return res.status(404).json({ message: "job not found" });
            res.json(updatedjob);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deletejob(req, res) {
        try {
            const deletedjob = await jobService.deletejob(req.params.id);
            if (!deletedjob) return res.status(404).json({ message: "job not found" });
            res.json({ message: "job deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new JobController();
