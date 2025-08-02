import { motion } from 'framer-motion';
import { FaChartLine, FaRocket } from 'react-icons/fa';

const DexWidget = () => {
  // Get contract address from environment variable
  const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
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
            <span className="text-[#00FF00]">$A</span>ICE Chart
          </h3>
          <p className="text-[#87CEEB] mb-4">Live trading data on Moonshot</p>
          <div className="text-sm opacity-70 text-[#E0F6FF]">
            {displayAddress}
          </div>
          <motion.button
            className={`mt-4 font-bold py-2 px-6 rounded-full inline-flex items-center gap-2 ${
              contractAddress 
                ? 'bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] hover:shadow-lg' 
                : 'bg-[#1C2526] text-[#ADD8E6] border border-[#ADD8E6]/30 cursor-not-allowed opacity-50'
            }`}
            whileHover={contractAddress ? { scale: 1.05, y: -2 } : {}}
            whileTap={contractAddress ? { scale: 0.95 } : {}}
            disabled={!contractAddress}
            onClick={() => contractAddress && window.open(`https://moonshot.io/token/${contractAddress}`, '_blank')}
          >
            <FaRocket /> {contractAddress ? 'View on Moonshot' : 'Coming Soon'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DexWidget;
