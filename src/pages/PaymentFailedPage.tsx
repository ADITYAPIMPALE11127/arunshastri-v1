import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentFailedPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-center mb-6">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
            
            <p className="text-lg text-gray-600 mb-8">
              We're sorry, but there was an error processing your payment. Please try again or contact support if the issue persists.
            </p>
            
            <div className="space-y-4">
              <Link
                to="/order"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </Link>
              
              <div>
                <Link
                  to="/contact"
                  className="inline-block mt-4 text-indigo-600 hover:text-indigo-800"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentFailedPage;