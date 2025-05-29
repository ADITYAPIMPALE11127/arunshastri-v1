import express from 'express';
import Razorpay from 'razorpay';
import { saveUserDataToRTDB } from './realtimeDB.js';

const router = express.Router();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

router.post('/orders', async (req, res) => {
    const options = {
        amount: req.body.amount,
        currency: "INR",
        receipt: "receipt#1",
        payment_capture: 1
    };
    try {
        const response = await razorpay.orders.create(options);
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        console.error("Error creating order:", error);
        if (error && error.message) {
            console.error("Detailed error message:", error.message);
        }
        res.status(500).json({ error: "Failed to create order" });
    }
});

router.get('/payment/:paymentId', async (req, res) => {
    const { paymentId } = req.params;
     try {
        const payment = await razorpay.payments.fetch(paymentId);
        if (!payment) {
            return res.status(404).json({ error: "Payment not found" });
        }
        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        });
    } catch (error) {
        console.error("Error fetching payment:", error);
        if (error.statusCode === 400 && error.error && error.error.code === 'BAD_REQUEST_ERROR') {
            return res.status(404).json({ error: "Payment not found" });
        }
        res.status(500).json({ error: "Failed to fetch payment details" });
    }
});

router.post('/saveUserData', async (req, res) => {
  const userData = req.body;
  try {
    const userId = await saveUserDataToRTDB(userData);
    res.status(200).json({ userId });
  } catch (error) {
    console.error('Error saving user data after payment:', error);
    res.status(500).json({ error: 'Failed to save user data' });
  }
});

export default router;
