import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import razorpayRouter from './services/razorPay.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Mount Razorpay router at /razorpay
app.use('/razorpay', razorpayRouter);

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
