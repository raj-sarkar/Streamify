import { 
    getAllUsersService, 
    getAllInstructorsService,
    approveInstructorRequestService,
    deleteUserService,
    getAnalyticsService
} from "../services/admin.service.js";

export const getAllUsersController = async (req, res) => {
    try {
        const users = await getAllUsersService();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllInstructorsController = async (req, res) => {
    try {
        const instructors = await getAllInstructorsService();
        res.json(instructors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const approveInstructorRequestController = async (req, res) => {
    try {
        const { userId } = req.body;
        const updatedUser = await approveInstructorRequestService(userId);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteUserService(id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAnalyticsController = async (req, res) => {
    try {
        const analytics = await getAnalyticsService();
        res.json(analytics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};