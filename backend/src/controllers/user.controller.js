import { updateUserService, getUserWatchHistoryService } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
    try {
        const updatedUser = await updateUserService(req.user._id, req.body,req.file);
        res.status(200).json({
            message: "Profile updated successfully",
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                role: updatedUser.role,
                profilePicture: updatedUser.profilePicture
            }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || "Failed to update profile"
        });
    }
};

export const getUserWatchHistoryController = async (req, res) => {
    try {
        const watchHistory = await getUserWatchHistoryService(req.user._id);
        res.status(200).json({
            message: "Watch history retrieved successfully",
            watchHistory
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || "Failed to retrieve watch history"
        });
    }
};
