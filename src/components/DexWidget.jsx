import { motion } from 'framer-motion';
import { FaChartLine, FaRocket } from 'react-icons/fa';

const DexWidget = () => {
  // Get URLs from environment variables
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
  const dexScreenerUrl = import.meta.env.VITE_DEX_SCREENER_URL || "https://dexscreener.com/moonshot/abstract";
  const displayAddress = contractAddress || 'CA: Soon™';

  return (
    <motion.div 
      className="w-full h-[500px] bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#ADD8E6]/5 to-[#87CEEB]/5">
        <div className="text-center">
          <motion.div 
            className="text-[#ADD8E6] text-6xl mb-4 flex justify-center"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <FaChartLine />
          </motion.div>
          <h3 className="text-2xl text-[#ADD8E6] mb-4 font-['Space_Grotesk']">
            <span className="text-[#00FF00]">$AI</span>CE Chart
          </h3>
          <p className="text-[#87CEEB] mb-4">Track $AICE on Moonshot</p>
          <div className="text-sm opacity-70 text-[#E0F6FF]">
            {displayAddress}
          </div>
          <motion.button
            className="mt-4 bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] font-bold py-2 px-6 rounded-full inline-flex items-center gap-2 hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(dexScreenerUrl, '_blank')}
          >
            <FaRocket /> View on Moonshot
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DexWidget;
