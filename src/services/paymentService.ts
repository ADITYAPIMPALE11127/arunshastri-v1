import { UserFormData, RazorpayOptions, RazorpayResponse } from '../types';

export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const initiatePayment = (userData: UserFormData): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const scriptLoaded = await loadRazorpayScript();
    
    if (!scriptLoaded) {
      reject(new Error('Razorpay SDK failed to load'));
      return;
    }

    const options: RazorpayOptions = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: 129900, // in paise (₹1299)
      currency: 'INR',
      name: 'ArunShastri',
      description: 'Fortune Report Plus',
      handler: function (response: RazorpayResponse) {
        resolve(response.razorpay_payment_id);
      },
      prefill: {
        name: userData.fullName,
        email: userData.email,
        contact: userData.whatsappNumber
      },
      notes: {
        address: `${userData.placeOfBirth}, ${userData.state}, ${userData.pincode}`
      },
      theme: {
        color: '#6366F1' // Indigo color
      }
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  });
};