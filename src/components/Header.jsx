import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Get social media URLs from environment variables
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL || "https://t.me/aicecubeonabstract";
  const twitterUrl = import.meta.env.VITE_TWITTER_URL || "https://x.com/cubeonabstract";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header 
        className="fixed w-full z-50 bg-[#1C2526]/90 backdrop-blur-sm py-4 px-6 border-b border-[#ADD8E6]/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            <img src="/logo.png" alt="AIce Logo" className="w-10 h-10 rounded-full" />
            <span className="font-['Space_Grotesk'] text-2xl text-[#ADD8E6] font-semibold">
              <span className="text-[#00FF00]">A</span>ice
            </span>
          </motion.div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Token', id: 'token' },
              { label: 'Community', id: 'community' }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#ADD8E6] hover:text-[#E0F6FF] transition-colors"
                whileHover={{ y: -3 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <motion.a 
                href={telegramUrl} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                <FaTelegram className="text-[#ADD8E6] text-xl hover:text-[#E0F6FF] transition-colors" />
              </motion.a>
              <motion.a 
                href={twitterUrl} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -10 }}
              >
                <FaTwitter className="text-[#ADD8E6] text-xl hover:text-[#E0F6FF] transition-colors" />
              </motion.a>
            </div>
            
            <button
              className="md:hidden text-[#ADD8E6] text-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.header>
      
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </>
  );
};

export default Header;
