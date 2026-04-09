import { updateUser } from "../repositories/user.repository.js";
import { uploadToCloudinary } from "./storage.service.js";
import { getWatchHistoryByUserId } from "../repositories/watchHistory.repository.js";

export const updateUserService = async (userId, data,image) => {
    let imageUrl = `https://res.cloudinary.com/dct0no7b6/image/upload/v1775285513/avatar_elui5s.png`;
    if (image) {
        imageUrl = await uploadToCloudinary(image);
    }

    return await updateUser(userId, { ...data, profilePicture: imageUrl });
};

export const getUserWatchHistoryService = async (userId) => {
    if (!userId) {
        throw new Error("User ID is required");
    }
    
    return await getWatchHistoryByUserId(userId);
};
