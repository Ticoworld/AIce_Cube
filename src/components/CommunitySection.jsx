import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaSnowflake } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

const CommunitySection = () => {
  // Get social media URLs from environment variables
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL || "https://t.me/aicecubeonabstract";
  const twitterUrl = import.meta.env.VITE_TWITTER_URL || "https://x.com/cubeonabstract";
  
  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Animated background for Community section */}
      <AnimatedBackground variant="community" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FF00]">C</span><span className="text-[#ADD8E6]">OMMUNITY</span>
        </motion.h2>
        
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-[#87CEEB] mb-4 font-['Space_Grotesk']">Stay Frosty with the Crew</h3>
          <p className="text-lg text-[#E0F6FF]">
            Join our growing community of AI and crypto enthusiasts. Be the first to get updates, 
            participate in events, and help shape the future of <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice</span>.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl p-6 h-full">
              <h3 className="text-2xl text-[#ADD8E6] mb-4 font-['Space_Grotesk']">Twitter Updates</h3>
              <div className="bg-gradient-to-br from-[#1C2526] to-[#2A3B3D] rounded-lg p-6 h-96 flex items-center justify-center border border-[#ADD8E6]/20">
                <div className="text-center">
                  <FaTwitter className="text-[#87CEEB] text-6xl mb-4 mx-auto" />
                  <p className="text-[#ADD8E6] mb-4">Follow us for the latest updates</p>
                  <motion.a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] font-bold py-2 px-6 rounded-full inline-flex items-center hover:shadow-lg hover:shadow-[#ADD8E6]/50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter className="mr-2" /> Follow @cubeonabstract
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="bg-[#ADD8E6]/10 p-6 rounded-full mb-6">
                <FaTelegram className="text-[#ADD8E6] text-5xl" />
              </div>
              
              <h3 className="text-2xl text-[#ADD8E6] mb-4 font-['Space_Grotesk']">Telegram Community</h3>
              <p className="mb-6 max-w-md text-[#E0F6FF]">
                Join our active Telegram group for real-time discussions, announcements, 
                and direct access to the <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice</span> team.
              </p>
              
              <motion.a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] font-bold py-3 px-8 rounded-full inline-flex items-center hover:shadow-lg hover:shadow-[#ADD8E6]/50 transition-all mb-8"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTelegram className="mr-2" /> Join Telegram
              </motion.a>
              
              <div className="mt-8">
                <h4 className="text-[#87CEEB] font-bold mb-4">Community Rules</h4>
                <ul className="space-y-2 text-sm text-[#E0F6FF]">
                  <li>• Respect all community members</li>
                  <li>• No spamming or shilling other tokens</li>
                  <li>• Keep discussions relevant to $AICE and Abstract</li>
                  <li>• Have fun and stay frosty! <FaSnowflake className="inline text-[#ADD8E6]" /></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
