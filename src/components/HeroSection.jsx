import { motion } from 'framer-motion';
import { FaRocket, FaSnowflake } from 'react-icons/fa';
import GlitchText from './GlitchText';
import ParticlesBackground from './ParticlesBackground';

const HeroSection = () => {
  // Get social media URLs from environment variables
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL || "https://t.me/aicecubeonabstract";
  
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <ParticlesBackground />
      <div className="circuit-bg absolute inset-0"></div>
      <div className="frost-overlay absolute inset-0"></div>
      <div className="ice-particles absolute inset-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C2526]"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10 text-center">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/logo.png" alt="AIce Logo" className="mx-auto w-40 h-40 rounded-full shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <GlitchText text="$AICE" />
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-4xl text-[#E0F6FF] mb-8 font-['Space_Grotesk'] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-[#00FF00]">A</span><span className="text-[#00FF00]">I</span><span className="text-[#ADD8E6]">ce Cube on Abstract</span>
        </motion.h2>
        
        <motion.div 
          className="bg-[#1C2526]/80 border border-[#ADD8E6]/30 rounded-xl p-6 mb-8 max-w-2xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg md:text-xl text-[#87CEEB] mb-4">
            Empowering users with the framework of cutting-edge AI technology and a touch of icy precision
          </p>
          <div className="text-[#ADD8E6] space-y-2">
            <p>02 Powered by custom built Abstract token market intelligence bot</p>
            <p>02 Based dev who won't rug you at 92% bonding curve</p>
            <p className="text-[#E0F6FF] font-bold flex items-center justify-center gap-2">
              Good luck! <FaSnowflake className="text-[#87CEEB]" />
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#ADD8E6]/50 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket /> Launch on Moonshot
          </motion.button>
          <motion.a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[#ADD8E6] text-white font-bold py-3 px-8 rounded-full hover:bg-[#ADD8E6]/10 transition-all text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Telegram
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover bg-center opacity-20"></div>
    </section>
  );
};

export default HeroSection;
