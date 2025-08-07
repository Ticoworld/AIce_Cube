import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSnowflake } from 'react-icons/fa';

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  // Generate ice bubbles - reduced count for performance
  const iceBubbles = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-3 h-3 bg-gradient-to-br from-[#ADD8E6]/40 to-[#87CEEB]/40 rounded-full backdrop-blur-sm border border-[#E0F6FF]/20"
      initial={{ 
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
        opacity: 0 
      }}
      animate={{
        y: -50,
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 4 + Math.random() * 2, // Slower bubbles
        delay: Math.random() * 2,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  ));

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-[#1C2526] to-[#0D1617] flex items-center justify-center z-[100] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating Ice Bubbles with enhanced motion */}
      {iceBubbles}
      
      {/* Multiple frost overlays with different animations - centered */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ADD8E6]/5 to-transparent"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#87CEEB]/3 to-transparent"
        animate={{ 
          backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-[#E0F6FF]/10 via-transparent to-transparent"
        style={{
          backgroundSize: '200% 200%',
          backgroundPosition: 'center'
        }}
        animate={{ 
          scale: [0.8, 1.2, 0.8],
          opacity: [0.1, 0.4, 0.1],
          backgroundSize: ['150% 150%', '250% 250%', '150% 150%']
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="text-center relative z-10 flex flex-col items-center justify-center">
        <motion.div
          className="text-[#ADD8E6] text-8xl mb-8 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
            filter: [
              "drop-shadow(0 0 10px #ADD8E6)",
              "drop-shadow(0 0 30px #87CEEB)",
              "drop-shadow(0 0 10px #ADD8E6)"
            ],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaSnowflake />
        </motion.div>
        
        <motion.h1
          className="text-4xl font-['Space_Grotesk'] font-semibold mb-4"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-[#00FF00]">Loading $A</span><span className="text-[#00FF00]">I</span><span className="text-[#ADD8E6]">CE</span>
        </motion.h1>
        
        <motion.p
          className="text-[#87CEEB] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Preparing the meanest bot on Abstract...
        </motion.p>
        
        <motion.div
          className="w-64 h-2 bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-full overflow-hidden mx-auto backdrop-blur-sm"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#00FF00] via-[#ADD8E6] to-[#87CEEB]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
        
        <motion.div 
          className="mt-4 text-[#E0F6FF]/70 text-sm"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Initializing AIceXBT Market Intelligence
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
