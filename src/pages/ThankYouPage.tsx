import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Mail, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Your personalized Fortune Report will be emailed within 3 working days.
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
              
              <div className="flex items-start mb-4">
                <Mail className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium">Check your email</p>
                  <p className="text-gray-600">A confirmation has been sent to your email address.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium">Preparation of your report</p>
                  <p className="text-gray-600">
                    Astro Arun Shashtri will personally analyze your birth details and prepare your comprehensive Fortune Report.
                  </p>
                </div>
              </div>
            </div>
            
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYouPage;