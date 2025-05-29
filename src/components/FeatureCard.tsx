import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-indigo-100 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 text-indigo-600 rounded-full mb-4">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;