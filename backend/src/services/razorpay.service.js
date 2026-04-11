import razorpay from "../config/razorpay.js";
import crypto from "crypto";

export const createOrder = async (course) => {
    try {
        const options = {
            amount: course.price * 100,
            currency: "INR",
            receipt: `receipt_${course._id}`,
        };
        const order = await razorpay.orders.create(options);
        return order;
    } catch (error) {
        console.error("Error creating Razorpay order:", error);
        throw new Error("Failed to create order");
    }
};

export const verifyPayment = (order_id, payment_id, signature) => {
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${order_id}|${payment_id}`)
        .digest("hex");

    return expectedSignature === signature;
};
