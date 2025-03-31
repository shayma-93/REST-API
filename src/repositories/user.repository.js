import fs from "fs-extra"
import path from "path";


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/users.json");

class UserRepository {
    async readData() {
        try {
            const data = await fs.readJson(filePath);
            return data.users || [];
        } catch {
            return [];
        }
    }

    async writeData(users) {
        await fs.writeJson(filePath, { users }, { spaces: 2 });
    }

    async create(user) {
        const users = await this.readData();
        user.id = Date.now().toString();
        users.push(user);
        await this.writeData(users);
        return user;
    }

    async findAll() {
        return await this.readData();
    }

    async findById(id) {
        const users = await this.readData();
        return users.find(user => user.id === id);
    }

    async update(id, userData) {
        let users = await this.readData();
        const index = users.findIndex(user => user.id === id);
        if (index === -1) return null;

        users[index] = { ...users[index], ...userData };
        await this.writeData(users);
        return users[index];
    }

    async delete(id) {
        let users = await this.readData();
        const newUsers = users.filter(user => user.id !== id);
        if (newUsers.length === users.length) return null;

        await this.writeData(newUsers);
        return true;
    }
}

export default new UserRepository();
