import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import { UserFormData } from '../types';
import { useNavigate } from 'react-router-dom';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<UserFormData>();
  const [timeError, setTimeError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const validateTime = (time: string) => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRegex.test(time) || 'Please enter a valid time (HH:MM)';
  };

  const onFormSubmit = async (data: UserFormData) => {
    const isTimeValid = validateTime(data.timeOfBirth);
    if (isTimeValid !== true) {
      setTimeError(isTimeValid);
      return;
    }

    setTimeError(null);
    setSubmitting(true);

    try {
      // Create order on backend
      const response = await fetch('https://razorpay-service-piug.onrender.com/razorpay/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 9900 }) // amount in paise
      });

      if (!response.ok) {
        toast.error('Failed to create payment order. Please try again.');
        setSubmitting(false);
        return;
      }

      const orderData = await response.json();

      // Display Razorpay payment modal with handler to save user data after payment success
      const res = await new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });

      if (!res) {
        toast.error('Razorpay SDK failed to load. Are you online?');
        setSubmitting(false);
        return;
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || '',
        amount: 9900,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Payment for Astrology Report',
        order_id: orderData.order_id,
        handler: async function (response: any) {
          try {
            // Save user data after successful payment
            const saveResponse = await fetch('https://razorpay-service-piug.onrender.com/razorpay/saveUserData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            if (!saveResponse.ok) {
              toast.error('Payment succeeded but failed to save user data.');
              setSubmitting(false);
              return;
            }
            toast.success('Payment successful and user data saved!');
            onSubmit(data);
            // Redirect to Thank You page
            navigate('/thank-you');
          } catch (error) {
            console.error('Error saving user data after payment:', error);
            toast.error('Payment succeeded but error occurred saving user data.');
          } finally {
            setSubmitting(false);
          }
        },
        prefill: {
          email: data.email,
          name: data.fullName,
        },
        theme: {
          color: '#3399cc'
        }
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('Failed to process payment. Please try again.');
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FULL NAME */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'Full name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* WHATSAPP NUMBER */}
        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number*</label>
          <input
            id="whatsappNumber"
            type="tel"
            {...register('whatsappNumber', {
              required: 'WhatsApp number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit number'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.whatsappNumber && <p className="text-red-600 text-sm">{errors.whatsappNumber.message}</p>}
        </div>

        {/* DATE OF BIRTH */}
        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
          <Controller
            control={control}
            name="dateOfBirth"
            rules={{ required: 'Date of birth is required' }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={field.onChange}
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholderText="DD/MM/YYYY"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
              />
            )}
          />
          {errors.dateOfBirth && <p className="text-red-600 text-sm">{errors.dateOfBirth.message}</p>}
        </div>

        {/* TIME OF BIRTH */}
        <div>
          <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Time of Birth* (HH:MM)</label>
          <input
            id="timeOfBirth"
            type="text"
            {...register('timeOfBirth', { required: 'Time of birth is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="e.g. 14:30"
          />
          {timeError && <p className="text-red-600 text-sm">{timeError}</p>}
        </div>

        {/* GENDER */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
          <select
            id="gender"
            {...register('gender', { required: 'Gender is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-600 text-sm">{errors.gender.message}</p>}
        </div>

        {/* REPORT LANGUAGE */}
        <div>
          <label htmlFor="reportLanguage" className="block text-sm font-medium text-gray-700 mb-1">Report Language</label>
          <input type="hidden" value="English" {...register('reportLanguage', { required: 'Report language is required' })} />
          <p className="px-4 py-2 bg-gray-100 border rounded-md">English</p>
        </div>

        {/* CHALLENGE */}
        <div className="md:col-span-2">
          <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-700 mb-1">Current Challenge (optional)</label>
          <textarea
            id="currentChallenge"
            rows={3}
            {...register('currentChallenge')}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* PLACE OF BIRTH */}
        <div>
          <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Place of Birth – City*</label>
          <input
            id="placeOfBirth"
            type="text"
            {...register('placeOfBirth', { required: 'Place of birth is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.placeOfBirth && <p className="text-red-600 text-sm">{errors.placeOfBirth.message}</p>}
        </div>

        {/* STATE */}
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State*</label>
          <input
            id="state"
            type="text"
            {...register('state', { required: 'State is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.state && <p className="text-red-600 text-sm">{errors.state.message}</p>}
        </div>

        {/* PINCODE */}
        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">Pincode*</label>
          <input
            id="pincode"
            type="text"
            {...register('pincode', {
              required: 'Pincode is required',
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'Please enter a valid 6-digit pincode'
              }
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.pincode && <p className="text-red-600 text-sm">{errors.pincode.message}</p>}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          disabled={submitting}
          className={`px-8 py-3 font-medium rounded-md text-white transition-colors ${
            submitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          }`}
        >
          {submitting ? 'Submitting...' : 'Proceed to Payment - ₹99'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
