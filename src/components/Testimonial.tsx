import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  imageSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, location, quote, rating, imageSrc }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
        />
        <div>
          <h4 className="text-sm sm:text-base font-semibold">{name}</h4>
          <p className="text-xs sm:text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-3 h-3 sm:w-4 sm:h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-sm sm:text-base text-gray-600 italic">"{quote}"</p>
    </div>
  );
};

export default Testimonial;