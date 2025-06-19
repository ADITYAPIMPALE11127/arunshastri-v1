import React from 'react';
import {Award} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDEBD0] text-black py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-lg sm:text-xl font-bold">ArunShashtri</h3>
            </div>
            <p className="text-sm sm:text-base text-black-200 mb-4">
              Decode your destiny with astrology & numerology through our personalized Fortune Report Plus.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-black-300" />
              About Astro Arun Shashtri
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-black-200">
              <li>Award-winning astrologer</li>
              <li>8+ years of experience</li>
              <li>Jyothish Shashtri</li>
              <li>Gold Medalist</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-black-300" />
              Legal
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-black-200">
              <li>
                <Link to="https://merchant.razorpay.com/policy/QXGeS7a6Ubr13P/terms" className="text-black-300 hover:underline">
                  Terms and Conditions
                </Link>
                <p className="text-xs sm:text-sm mt-1">Last updated on May 20, 2025</p>
              </li>
              <li>
                <Link to="https://razorpay.com/privacy/" className="text-black-300 hover:underline">
                  Privacy Policy
                </Link>
                <p className="text-xs sm:text-sm mt-1">Razorpay securely collects and uses personal data for payment services (updated March 19, 2024).</p>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/QXGeS7a6Ubr13P/shipping" className="text-black-300 hover:underline">
                  Shipping Policy
                </Link>
                <p className="text-xs sm:text-sm mt-1">Shipping is not applicable for our business. PDF reports only.</p>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/QXGeS7a6Ubr13P/refund" className="text-black-300 hover:underline">
                  Cancellation and Refund
                </Link>
                <p className="text-xs sm:text-sm mt-1">No cancellations & refunds are entertained</p>
              </li>
              <li>
                <Link to="/contact" className="text-black-300 hover:underline">Contact Us</Link>
                <p className="text-xs sm:text-sm mt-1">Email: support@arunshashtri.com</p>
              </li>
              <li>
                <Link to="/faq" className="text-black-300 hover:underline">
                  Frequently Asked Questions
                </Link>     
              </li>
              <li>
                <Link to="/license" className="text-black-300 hover:underline">
                  License and Copyright Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-xs sm:text-sm text-black-300">
          <p>© {new Date().getFullYear()} ArunShashtri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
