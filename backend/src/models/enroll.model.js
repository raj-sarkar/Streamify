import mongoose from "mongoose";

const enrollSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course",
        required: true,
    },
}, { timestamps: true });

const Enroll = mongoose.model("enroll", enrollSchema);

export default Enroll;
