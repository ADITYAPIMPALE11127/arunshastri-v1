import React from 'react';
import { Star, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Star className="h-8 w-8 text-yellow-300" />
          <span className="text-2xl font-bold">ArunShastri</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-yellow-300 transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;