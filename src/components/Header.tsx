import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import omSvg from '../../assets/om-svgrepo-com.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#5B2340] text-[#fd8f8f]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
<Link to="/" className="flex items-center relative group">
  <span className="text-xl sm:text-2xl text-white font-semibold relative z-10 pr-2">
    Arun
  </span>

  {/* Om symbol behind text in the center */}
  <div className="absolute left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] opacity-30 group-hover:opacity-40 z-0">
    <img src={omSvg} alt="Om" className="w-full h-full" />
  </div>

  <span className="text-xl sm:text-2xl text-white font-semibold relative z-10 pl-2">
    Shashtri
  </span>
</Link>


          {/* Rest of your header code remains unchanged */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 transition-colors">About</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-300 transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation remains unchanged */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="block hover:text-yellow-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block hover:text-yellow-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/faq" className="block hover:text-yellow-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>FAQs</Link></li>
              <li><Link to="/contact" className="block hover:text-yellow-300 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
      <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '4136037990012631');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=4136037990012631&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
    </header>
  );
};

export default Header;
