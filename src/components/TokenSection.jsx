import { motion, AnimatePresence } from 'framer-motion';
import { FaCoins, FaNetworkWired, FaRocket, FaCube, FaCopy } from 'react-icons/fa';
import DexWidget from './DexWidget';
import AnimatedBackground from './AnimatedBackground';

import { useState } from 'react';

const TokenSection = () => {
  const [copied, setCopied] = useState(false);
  const [cubeAnim, setCubeAnim] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setCubeAnim(true);
    setTimeout(() => setCopied(false), 1500);
    setTimeout(() => setCubeAnim(false), 1000);
    // Simulate copying CA (even though it's not live)
    navigator.clipboard.writeText('CA: Soon™');
  };

  return (
    <section id="token" className="py-20 relative overflow-hidden">
      {/* Animated background for Token section */}
      <AnimatedBackground variant="token" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice Token</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <DexWidget />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl p-8 h-full">
              <h3 className="text-2xl text-[#ADD8E6] mb-6 font-['Space_Grotesk']">Token Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaCoins className="text-[#ADD8E6]" />
                  <div>
                    <h4 className="text-[#87CEEB] font-bold">Name</h4>
                    <p className="text-[#E0F6FF]">
                      <span className="text-[#00FF00]">A</span>ice
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaCoins className="text-[#87CEEB]" />
                  <div>
                    <h4 className="text-[#87CEEB] font-bold">Symbol</h4>
                    <p className="text-[#E0F6FF]">$AICE</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaNetworkWired className="text-[#ADD8E6]" />
                  <div>
                    <h4 className="text-[#87CEEB] font-bold">Network</h4>
                    <p className="text-[#E0F6FF]">Abstract Chain</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaCoins className="text-[#87CEEB]" />
                  <div>
                    <h4 className="text-[#87CEEB] font-bold">Total Supply</h4>
                    <p className="text-[#E0F6FF]">1,000,000,000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <FaRocket className="text-[#ADD8E6]" />
                  <div>
                    <h4 className="text-[#87CEEB] font-bold">Bonding Curve</h4>
                    <p className="text-[#E0F6FF]">92% - Based dev won't rug you</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-[#87CEEB] font-bold">Contract Address</h4>
                  <div className="flex items-center gap-2 relative min-h-[40px]">
                    <p className="text-[#E0F6FF] bg-gradient-to-r from-[#ADD8E6]/20 to-[#87CEEB]/20 px-3 py-2 rounded-lg border border-[#ADD8E6]/30 select-all">
                      CA: Soon™
                    </p>
                    <button
                      onClick={handleCopy}
                      className="ml-2 text-[#ADD8E6] hover:text-[#87CEEB] transition-colors text-lg flex items-center justify-center"
                      aria-label="Copy CA"
                    >
                      <FaCopy />
                    </button>
                    {/* Animated cubes */}
                    <AnimatePresence>
                      {cubeAnim && [0,1,2].map(i => (
                        <motion.div
                          key={i}
                          className="absolute left-1/2 top-1/2"
                          initial={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                          animate={{
                            y: [-5, -30 - i*10, -50 - i*20],
                            x: [0, (i-1)*30],
                            opacity: [1, 1, 0],
                            scale: [1, 1.2, 0.8]
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 + i*0.1, type: 'spring' }}
                          style={{ zIndex: 20 }}
                        >
                          <FaCube className="text-[#ADD8E6] text-xl drop-shadow-lg" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {/* Copied text */}
                    <AnimatePresence>
                      {copied && (
                        <motion.span
                          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full text-[#00FF00] font-bold text-sm bg-[#1C2526] px-2 py-1 rounded shadow-lg"
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: -10, scale: 1.1 }}
                          exit={{ opacity: 0, y: -20, scale: 0.7 }}
                          transition={{ duration: 0.5 }}
                        >
                          Copied!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-[#87CEEB] font-bold mb-2">How to Buy on Moonshot</h4>
                <ol className="list-decimal pl-5 space-y-2 text-[#E0F6FF]">
                  <li>Connect your Abstract-compatible wallet</li>
                  <li>Visit Moonshot platform</li>
                  <li>Swap ETH or other tokens for $AICE</li>
                  <li>HODL and enjoy the ride to the moon <FaRocket className="inline text-[#ADD8E6]" /></li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
