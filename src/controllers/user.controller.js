import userService from "../services/user.service.js"
class UserController {
    async createUser(req, res) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateUser(req, res) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            if (!updatedUser) return res.status(404).json({ message: "User not found" });
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const deletedUser = await userService.deleteUser(req.params.id);
            if (!deletedUser) return res.status(404).json({ message: "User not found" });
            res.json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new UserController();
