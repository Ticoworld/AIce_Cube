import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      className={`fixed inset-0 bg-[#1C2526]/95 backdrop-blur-sm z-40 md:hidden ${
        isOpen ? 'block' : 'hidden'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {[
          { label: 'Home', id: 'home' },
          { label: 'About', id: 'about' },
          { label: 'Token', id: 'token' },
          { label: 'Community', id: 'community' }
        ].map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-2xl text-[#ADD8E6] hover:text-[#87CEEB] transition-colors font-['Space_Grotesk']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -3 }}
          >
            {item.label}
          </motion.button>
        ))}
        
        <motion.div 
          className="text-2xl font-['Space_Grotesk'] mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ICE</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
