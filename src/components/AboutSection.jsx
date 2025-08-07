import { motion } from 'framer-motion';
import { FaRobot, FaCubes } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

const AboutSection = () => {
  const timeline = [
    { date: "May 2025", event: "Foundation", description: "Twitter created and bot development begins" },
    { date: "June 2025", event: "Bot Refinement", description: "Engagement bot perfected, delivering 60K impressions" },
    { date: "July 2025", event: "Launch Preparation", description: "Telegram community created, Dexscreener planning" },
    { date: "August 2025", event: "$AICE Launch", description: "Token launches on Abstract blockchain" },
    { date: "September 2025", event: "Stake & Engage", description: "Stake or burn $AICE to boost your X engagement" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background for About section */}
      <AnimatedBackground variant="about" />
      
      {/* Icy background effects */}
      <div className="absolute inset-0 frost-overlay"></div>
      <div className="absolute inset-0 crystalline-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice Story</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl text-[#ADD8E6] mb-4 font-['Space_Grotesk'] flex items-center gap-3">
                <FaCubes className="text-[#87CEEB]" />
                The Origin
              </h3>
              <p className="mb-4 text-[#E0F6FF]">
                <span className="text-[#00FF00] font-bold">A</span><span className="text-[#ADD8E6] font-bold">ice</span> emerged from the intersection of 
                cutting-edge AI technology and the raw energy of hip-hop culture. 
                Inspired by the legendary rapper Ice Cube, we're bringing that 
                "mean" attitude to the blockchain.
              </p>
              <p className="mb-4 text-[#E0F6FF]">
                Our flagship AI engagement bot has already proven its power, delivering 
                over <span className="text-[#87CEEB] font-bold">60,000 impressions</span> during development. 
                Soon, you'll be able to stake or burn <span className="text-[#00FF00]">$A</span><span className="text-[#ADD8E6]">ICE </span> 
                to harness this bot's power for your own X engagement.
              </p>
              <p className="mb-4 text-[#E0F6FF]">
                The name <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice</span> fuses <span className="text-[#00FF00]">"A</span><span className="text-[#ADD8E6]">I"</span> 
                (Artificial Intelligence) with <span className="text-[#87CEEB]">"Ice"</span> - a nod to both the 
                rapper's name and the cool precision of our technology.
              </p>
              <p className="text-[#E0F6FF]">
                Our mission is simple: create the most powerful, no-nonsense AI bot on the Abstract chain.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="border-l-4 border-[#ADD8E6] pl-6 py-4">
              <h3 className="text-2xl text-[#ADD8E6] mb-6 font-['Space_Grotesk']">Timeline</h3>
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className="mb-8 relative pl-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-[-10px] top-2 w-4 h-4 bg-[#ADD8E6] rounded-full"></div>
                  <div className="text-[#87CEEB] font-bold">{item.date}</div>
                  <h4 className="text-xl font-bold mt-1 text-[#E0F6FF]">{item.event}</h4>
                  <p className="text-sm opacity-80 text-[#ADD8E6]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-[#1C2526]/50 border border-[#ADD8E6]/30 rounded-xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-[#ADD8E6] mb-4 font-['Space_Grotesk'] flex items-center gap-3">
            <div>
              <FaRobot className="text-[#87CEEB]" />
            </div>
           <span><span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">Ice</span></span> Automated Bot
          </h3>
          <div className="bg-gradient-to-br from-[#1C2526] to-[#2A3B3D] rounded-lg p-6 h-64 flex items-center justify-center border border-[#ADD8E6]/20">
            <div className="text-center">
              <div 
                className="text-[#ADD8E6] text-5xl mb-4 flex justify-center"
              >
                <FaRobot />
              </div>
              <p className="text-[#87CEEB] text-lg mb-4">Meet our automated engagement bot!</p>
              <p className="text-[#ADD8E6] text-sm mb-4">Powered by Kaito farming technology</p>
              <a 
                href={import.meta.env.VITE_BOT_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FF00] to-[#87CEEB] text-[#1C2526] px-6 py-2 rounded-lg font-semibold hover:from-[#87CEEB] hover:to-[#00FF00] transition-all duration-300 transform hover:scale-105"
              >
                <FaRobot />
                Follow Bot
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
