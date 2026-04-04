import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../repositories/user.repository.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (data, currentUser,res) => {
    const { name, email, password, role } = data;

    if (!name || !email || !password) {
        throw new Error("All fields required");
    }

    const existingUser = await findUserByEmail(email);
    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let assignedRole = "user";
    if (role && currentUser?.role === "admin") {
        assignedRole = role;
    }

    const profilePicture = `https://res.cloudinary.com/dct0no7b6/image/upload/v1775285513/avatar_elui5s.png`;

    const user = await createUser({
        name,
        email,
        password: hashedPassword,
        role: assignedRole,
        profilePicture
    });

    const token = generateToken(user._id, user.role, res);

    return {
        user,
        token
    };
};

export const loginUser = async (data, res) => {
    const { email, password } = data;

    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    const user = await findUserByEmail(email);

    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken(user._id, user.role, res);

    return {
        user,
        token
    };
};

export const logoutUser = (res) => {
    res.clearCookie("jwt", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });
    return { message: "Logout successful" };
};
