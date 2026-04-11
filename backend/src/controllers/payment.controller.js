import { createPaymentOrderService } from "../services/payment.service.js";

export const createPaymentOrderController = async (req, res) => {
    try {
        const { courseID } = req.body;
        const order = await createPaymentOrderService(courseID);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const verifyPaymentController = (req, res) => {
    try {
        const { order_id, payment_id, signature, courseId } = req.body;
        const userId = req.user._id;
        const isValid = verifyPaymentService(order_id, payment_id, signature, courseId, userId);
        res.status(200).json({ success: isValid });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
