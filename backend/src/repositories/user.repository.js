import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const createUser = async (userData) => {
    return await User.create(userData);
};

export const updateUser = async (userId, updateData) => {
    return await User.findByIdAndUpdate(userId, updateData, { returnDocument: "after" });
};

export const getUserById = async (userId) => {
    return await User.findById(userId);
};

export const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

export const getUsers = async () => {
    return await User.find({ role: "user" }).select("-password");
};

export const getInstructors = async () => {
    return await User.find({ role: "instructor" }).select("-password");
};

export const countUsers = async () => {
    return await User.countDocuments({ role: "user" });
};

export const countInstructors = async () => {
    return await User.countDocuments({ role: "instructor" });
};

export const approveInstructor = async (userId) => {
    return await User.findByIdAndUpdate(userId, { role: "instructor" }, { returnDocument: "after" });
};
