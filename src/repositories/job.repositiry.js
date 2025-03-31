import fs from "fs-extra"
import path from "path";


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/jobs.json");

class JobRepository {
    async readData() {
        try {
            const data = await fs.readJson(filePath);
            return data.jobs || [];
        } catch {
            return [];
        }
    }

    async writeData(jobs) {
        await fs.writeJson(filePath, { jobs }, { spaces: 2 });
    }

    async create(job) {
        const jobs = await this.readData();
        job.id = Date.now().toString();
        jobs.push(job);
        await this.writeData(jobs);
        return job;
    }

    async findAll() {
        return await this.readData();
    }

    async findById(id) {
        const jobs = await this.readData();
        return jobs.find(job => job.id === id);
    }

    async update(id, jobData) {
        let jobs = await this.readData();
        const index = jobs.findIndex(job => job.id === id);
        if (index === -1) return null;

        jobs[index] = { ...jobs[index], ...jobData };
        await this.writeData(jobs);
        return jobs[index];
    }

    async delete(id) {
        let jobs = await this.readData();
        const newjobs = jobs.filter(job => job.id !== id);
        if (newjobs.length === jobs.length) return null;

        await this.writeData(newjobs);
        return true;
    }
}

export default new JobRepository();
