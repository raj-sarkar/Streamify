import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
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

    orderId: {
        type: String,
        required: true,
    },

    paymentId: {
        type: String,
    },

    amount: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ["created", "success", "failed"],
        default: "created",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Payment = mongoose.model("payment", paymentSchema);

export default Payment;
