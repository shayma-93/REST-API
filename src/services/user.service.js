import userRepository from "../repositories/user.repository.js"
class UserService {
    async createUser(userData) {
        return await userRepository.create(userData);
    }

    async getAllUsers() {
        return await userRepository.findAll();
    }

    async getUserById(id) {
        return await userRepository.findById(id);
    }

    async updateUser(id, userData) {
        if (userData.name) {
            userData.name = this.capitalizeName(userData.name);
        }
        return await userRepository.update(id, userData);
    }

    async deleteUser(id) {
        return await userRepository.delete(id);
    }

 
}

export default new UserService();
