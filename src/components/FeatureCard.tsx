import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-orange-100 shadow-[0_10px_30px_rgba(207,46,46,0.3)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(207,46,46,0.4)] transition-all duration-300">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-100 text-[#cf2e2e] rounded-full mb-4">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
};


export default FeatureCard;
