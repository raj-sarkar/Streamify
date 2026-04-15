import { logoutUser, registerUser, loginUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const { user, token } = await registerUser({...req.body,profilePicture: req.file}, req.user, res);

        res.status(201).json({
            message: "User created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture
            }
        });

    } catch (error) {
        res.status(400).json({
            message: error.message || "Something went wrong"
        });
    }
};

export const login = async (req, res) => {
    try{
        const {user, token} = await loginUser(req.body, res);

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                profilePicture: user.profilePicture
            }
        });

    } catch (error) {
        res.status(401).json({
            message: error.message || "Invalid credentials"
        });
    }
};

export const logout = (req, res) => {
    const {message}=logoutUser(res);

    res.status(200).json({ message});
};

export const current = async (req, res) => {
    try {
        res.status(200).json({user:req.user});
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal server error"
        });
    }
};
