import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import zodiacSignsImg from '../../assets/zodiac-signs.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center">About Astro Arun Shashtri</h1>
            
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <img 
  src={zodiacSignsImg} 
  alt="Astro Arun Shastri" 
  className="rounded-lg shadow-md w-full"
/>

              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  Astro Arun Shashtri is a renowned astrologer with over 8 years of experience in Vedic astrology, numerology, and remedial measures. His passion for astrology began at a young age, inspired by his grandfather who was a respected village astrologer.
                </p>
                <p className="text-lg mb-4">
                  After completing his formal education in Jyotish Shastra, Arun dedicated his life to helping people navigate their life challenges through the ancient wisdom of astrology.
                </p>
                <p className="text-lg">
                  His unique approach combines traditional Vedic principles with modern psychological insights, making his guidance practical and relevant for today's complex world.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#FDEBD0] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-indigo-600 mr-3" />
                  <h2 className="text-xl font-semibold">Credentials & Awards</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">

                    <span>Gold Medalist in Jyotish Shastra</span>
                  </li>
                  <li className="flex items-start">

                    <span>Certified by the Indian Council of Astrological Sciences</span>
                  </li>
                  <li className="flex items-start">

                    <span>Recipient of the "Best Astrologer" award in 2022</span>
                  </li>
                  <li className="flex items-start">

                    <span>Featured in leading publications for accurate predictions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#FDEBD0] p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-indigo-600 mr-3" />
                  <h2 className="text-xl font-semibold">Specializations</h2>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">

                    <span>Career and Business Astrology</span>
                  </li>
                  <li className="flex items-start">

                    <span>Relationship Compatibility Analysis</span>
                  </li>
                  <li className="flex items-start">

                    <span>Remedial Astrology (Gemstones, Mantras, Yantras)</span>
                  </li>
                  <li className="flex items-start">

                    <span>Medical Astrology and Health Analysis</span>
                  </li>
                  <li className="flex items-start">

                    <span>Muhurta (Electional Astrology)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#FDEBD0] text-[#44233b] p-8 rounded-lg mb-12">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-yellow-300 mr-4" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg mb-4">
                At ArunShashtri, our mission is to make the ancient wisdom of Vedic astrology accessible and practical for modern life challenges. We believe that understanding your cosmic blueprint can empower you to make better decisions and live a more fulfilling life.
              </p>
              <p className="text-lg">
                Through our personalized Fortune Reports, we aim to provide not just predictions, but actionable insights and remedies that can help you navigate life's journey with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;