import {createOrder, verifyPayment} from './razorpay.service.js';
import { getCourseByIdService } from "../services/course.service.js";
import { getEnrollment } from "../repositories/course.repository.js";

export const createPaymentOrderService = async (courseId) => {
    try {        
        const course = await getCourseByIdService(courseId);
        if (!course) {
            throw new Error("Course not found");
        }

        const order = await createOrder(course);
        return order;
    } catch (error) {
        console.error("Error creating payment order:", error);
        throw new Error("Failed to create payment order");
    }
};

export const verifyPaymentService = (order_id, payment_id, signature, courseId, userId) => {
    const isValid = verifyPayment(order_id, payment_id, signature);
    if(!isValid) {
        throw new Error("Invalid payment signature");
    }

    const alreadyEnrolled = getEnrollment(userId, courseId);
    if (alreadyEnrolled) {
        throw new Error("User already enrolled in this course");
    }

    return isValid;
};
