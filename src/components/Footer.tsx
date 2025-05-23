import React from 'react';
import { Mail, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-yellow-300" />
              <h3 className="text-xl font-bold">ArunShastri</h3>
            </div>
            <p className="text-indigo-200 mb-4">
              Decode your destiny with astrology & numerology through our personalized Fortune Report Plus.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-300" />
              About Astro Arun Shastri
            </h3>
            <ul className="space-y-2 text-indigo-200">
              <li>Award-winning astrologer</li>
              <li>8+ years of experience</li>
              <li>Jyothish Shashtri</li>
              <li>Gold Medalist</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="flex items-center text-indigo-200 mb-4">
              <Mail className="h-5 w-5 mr-2 text-yellow-300" />
              <a href="mailto:support@astroarunpandit.org">support@astroarunpandit.org</a>
            </p>
            <div className="mt-6">
              <Link to="/faq" className="text-yellow-300 hover:underline">
                Frequently Asked Questions
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} ArunShastri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;