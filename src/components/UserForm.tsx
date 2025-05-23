import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { UserFormData } from '../types';

interface UserFormProps {
  onSubmit: (data: UserFormData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<UserFormData>();
  const [timeError, setTimeError] = useState<string | null>(null);
  
  const validateTime = (time: string) => {
    const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
    return timeRegex.test(time) || 'Please enter a valid time (HH:MM)';
  };

  const onFormSubmit = (data: UserFormData) => {
    const isTimeValid = validateTime(data.timeOfBirth);
    
    if (isTimeValid !== true) {
      setTimeError(isTimeValid);
      return;
    }
    
    setTimeError(null);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email*
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
            WhatsApp Number*
          </label>
          <input
            id="whatsappNumber"
            type="tel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('whatsappNumber', { 
              required: 'WhatsApp number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Please enter a valid 10-digit number'
              }
            })}
          />
          {errors.whatsappNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.whatsappNumber.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth*
          </label>
          <Controller
            control={control}
            name="dateOfBirth"
            rules={{ required: 'Date of birth is required' }}
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholderText="DD/MM/YYYY"
              />
            )}
          />
          {errors.dateOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Time of Birth* (HH:MM)
          </label>
          <input
            id="timeOfBirth"
            type="text"
            placeholder="e.g. 14:30"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('timeOfBirth', { required: 'Time of birth is required' })}
          />
          {timeError && (
            <p className="mt-1 text-sm text-red-600">{timeError}</p>
          )}
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
            Gender*
          </label>
          <select
            id="gender"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('gender', { required: 'Gender is required' })}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && (
            <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="reportLanguage" className="block text-sm font-medium text-gray-700 mb-1">
            Report Language*
          </label>
          <select
            id="reportLanguage"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('reportLanguage', { required: 'Report language is required' })}
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          {errors.reportLanguage && (
            <p className="mt-1 text-sm text-red-600">{errors.reportLanguage.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-700 mb-1">
            Current Challenge (optional)
          </label>
          <textarea
            id="currentChallenge"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('currentChallenge')}
          ></textarea>
        </div>

        <div>
          <label htmlFor="placeOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
            Place of Birth – City*
          </label>
          <input
            id="placeOfBirth"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('placeOfBirth', { required: 'Place of birth is required' })}
          />
          {errors.placeOfBirth && (
            <p className="mt-1 text-sm text-red-600">{errors.placeOfBirth.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State*
          </label>
          <input
            id="state"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('state', { required: 'State is required' })}
          />
          {errors.state && (
            <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
            Pincode*
          </label>
          <input
            id="pincode"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            {...register('pincode', { 
              required: 'Pincode is required',
              pattern: {
                value: /^[0-9]{6}$/,
                message: 'Please enter a valid 6-digit pincode'
              }
            })}
          />
          {errors.pincode && (
            <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
        >
          Proceed to Payment - ₹1299
        </button>
      </div>
    </form>
  );
};

export default UserForm;