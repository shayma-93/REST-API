import jobRepository from "../repositories/job.repositiry.js"
class JobService {
    async createjob(jobData) {
        return await jobRepository.create(jobData);
    }

    async getAlljobs() {
        return await jobRepository.findAll();
    }

    async getjobById(id) {
        return await jobRepository.findById(id);
    }

    async updatejob(id, jobData) {
        if (jobData.name) {
            jobData.name = this.capitalizeName(jobData.name);
        }
        return await jobRepository.update(id, jobData);
    }

    async deletejob(id) {
        return await jobRepository.delete(id);
    }

 
}

export default new JobService();
