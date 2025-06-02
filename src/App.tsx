import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import ThankYouPage from './pages/ThankYouPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import PaymentCancelledPage from './pages/PaymentCancelledPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import LicensePage from './pages/LicensePage';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />
        <Route path="/payment-cancelled" element={<PaymentCancelledPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/license" element={<LicensePage />} />
      </Routes>
    </Router>
  );
}

export default App;
