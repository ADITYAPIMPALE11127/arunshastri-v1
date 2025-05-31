import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserForm from '../components/UserForm';
import { UserFormData } from '../types';

const OrderPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFormSubmit = async (formData: UserFormData) => {
    console.log('OrderPage received form data:', formData);
    setIsLoading(true);
    setError(null);

    try {
      // Save user data to Airtable via backend endpoint
      console.log('Sending data to Airtable backend:', formData);
      const saveResponse = await fetch('http://localhost:3000/api/save-to-airtable', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          whatsappNumber: formData.whatsappNumber,
          dateOfBirth: formData.dateOfBirth.toISOString().split('T')[0], // Format as YYYY-MM-DD
          timeOfBirth: formData.timeOfBirth,
          gender: formData.gender,
          reportLanguage: formData.reportLanguage,
          currentChallenge: formData.currentChallenge || '',
          placeOfBirth: formData.placeOfBirth,
          state: formData.state,
          pincode: formData.pincode,
          paymentId: formData.paymentId,
          orderId: formData.orderId,
        }),
      });

      if (!saveResponse.ok) {
        const errorText = await saveResponse.text();
        console.error('Airtable save failed:', errorText);
        throw new Error('Failed to save data to Airtable');
      }

      console.log('Airtable save successful:', await saveResponse.json());
    } catch (err) {
      console.error('Error processing order:', err);
      setError('There was an error saving your data. Please try again.');
      navigate('/payment-failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-center mb-2">Fortune Report Plus</h1>
            <p className="text-center text-gray-600 mb-8">
              Please fill in your details to receive your personalized astrological report
            </p>
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Processing your request...</p>
              </div>
            ) : (
              <UserForm onSubmit={handleFormSubmit} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderPage;