import { motion } from 'framer-motion';

const IceCube = () => {
  return (
    <motion.div 
      className="relative w-64 h-64 mx-auto"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        rotate: [0, 5, -5, 3, 0]
      }}
      transition={{ 
        duration: 2,
        rotate: { 
          repeat: Infinity, 
          duration: 4,
          ease: "easeInOut"
        }
      }}
    >
      <div className="ice-cube mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00FF00]/10 rounded-[20px] blur-md"></div>
      </div>
    </motion.div>
  );
};

export default IceCube;
