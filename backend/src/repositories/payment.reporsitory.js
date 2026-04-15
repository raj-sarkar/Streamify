import Payment from "../models/payment.model.js";

export const createPayment = async (paymentData) => {
    const payment = new Payment(paymentData);
    return await payment.save();
};

export const countPayments = async () => {
    return await Payment.countDocuments({ status: "success" });
};

export const getTotalRevenue = async () => {
    const result = await Payment.aggregate([
        { $match: { status: "success" } },
        { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    return result[0]?.total || 0;
};
