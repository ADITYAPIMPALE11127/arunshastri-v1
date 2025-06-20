import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Moon, Sun, Compass, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';
import zodiacSignsImg from '../../assets/zodiac-signs.jpg';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
{/* Hero Section */}
<section className="bg-[#FDEBD0] text-white py-20">
  <div className="container mx-auto px-4 text-center">
    {/* <div className="flex justify-center mb-6">
      <Star className="h-16 w-16 text-yellow-300" />
    </div> */}
<h1 className="text-4xl md:text-5xl font-[500] mb-4 text-[#44233b]">
  Personalized Report
</h1>
<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-[#44233b]">
  Decode Your Destiny with Astrology & Numerology
</p>
<p className="text-lg text-[#44233b] mb-10 max-w-2xl mx-auto">
  Created by award-winning astrologer Arun Shashtri to help you understand your true path.
</p>
    
<p className="text-lg text-[#44233b] mb-10 max-w-2xl mx-auto">
Numerology is the ancient science of numbers that reveals the blueprint of your life. From your birth-date to the letters in your name, every number carries meaning.
 </p>   
    
<Link
  to="/order"
  className="inline-block px-8 py-4 bg-[#a00]/70 text-white font-bold rounded-md hover:from-[#3e3611] hover:to-[#3e3611]/70 transition-colors text-lg shadow-md"
>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2">

    <span className="text-white text-xl font-medium">₹99/- Only</span>
  </div>
</Link>

  </div>
</section>


        {/* Features Section */}
        <section className="py-16 bg-[#FDEBD0]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Highlights of Your Fortune Report</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Compass}
                title="Personalized Predictions"
                description="Detailed insights into your career path, health patterns, and relationship dynamics based on your unique birth chart."
              />
              <FeatureCard
                icon={Moon}
                title="Powerful Remedies"
                description="Customized recommendations for gemstones, mantras, and yantras to harmonize planetary influences in your life."
              />
              <FeatureCard
                icon={Sun}
                title="Complete Astrological Analysis"
                description="In-depth analysis of your Rashi, Lagna, and Nakshatra with yearly and monthly guidance for better planning."
              />
            </div>
          </div>
        </section>

        {/* About Astrologer Section */}
        <section className="py-16 bg-[#FDEBD0]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                     <img 
  src={zodiacSignsImg} 
  alt="Astro Arun Shastri" 
  className="rounded-lg shadow-md w-full"
/>

              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4 text-[#44233b]">
                  <Award className="h-8 w-8 text-yellow-500 mr-3" />
                  <h2 className="text-3xl font-bold">About Astro Arun Shashtri</h2>
                </div>
                <p className="text-[[#44233b]]-600 mb-6">
                  With over 8 years of experience in Vedic astrology, Astro Arun Shashtri has helped thousands of individuals navigate life's challenges through accurate astrological guidance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Gold Medalist in Jyotish Shastra</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Recognized by the Indian Council of Astrological Sciences</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Featured in leading publications for accurate predictions</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Specializes in remedial astrology and life path guidance</span>
                  </li>
                </ul>
<Link
  to="/order"
  className="inline-block px-8 py-4 bg-[#a00]/70 text-white font-bold rounded-md hover:from-[#3e3611] hover:to-[#3e3611]/70 transition-colors text-lg shadow-md"
>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
   
    <span className="text-white text-xl font-medium">₹99/- Only</span>
  </div>
</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-[#FDEBD0] ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Testimonial
                name="Priya Sharma"
                location="Mumbai"
                quote="The career guidance in my Fortune Report was incredibly accurate. Following the suggested remedies helped me secure a promotion I'd been working towards for years."
                rating={5}
                imageSrc="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Testimonial
                name="Rajesh Kumar"
                location="Delhi"
                quote="Astro Arun's insights into my relationship patterns were eye-opening. The report helped me understand my past mistakes and make better choices moving forward."
                rating={5}
                imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Testimonial
                name="Ananya Patel"
                location="Bangalore"
                quote="I was skeptical at first, but the accuracy of my Fortune Report was uncanny. The health recommendations were particularly helpful for my chronic issues."
                rating={4}
                imageSrc="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#FDEBD0] text-[#44233b] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Cosmic Blueprint?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get your personalized Fortune Report Plus today and unlock the secrets written in your stars.
            </p>
<Link
  to="/order"
  className="inline-block px-8 py-4 bg-[#a00]/70 text-white font-bold rounded-md hover:from-[#3e3611] hover:to-[#3e3611]/70 transition-colors text-lg shadow-md"
>
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
    <span className="text-white-500 line-through text-base">₹299</span>
    <span className="text-white text-xl font-extrabold">₹99/- Only</span>
  </div>
</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
