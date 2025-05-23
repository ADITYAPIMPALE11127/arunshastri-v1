import emailjs from 'emailjs-com';
import { UserFormData } from '../types';

export const sendConfirmationEmail = async (userData: UserFormData): Promise<void> => {
  try {
    const templateParams = {
      to_name: userData.fullName,
      to_email: userData.email,
      payment_id: userData.paymentId,
      date_of_birth: userData.dateOfBirth.toLocaleDateString(),
      report_language: userData.reportLanguage
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    );
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};