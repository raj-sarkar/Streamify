import razorpay from "../config/razorpay";

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
