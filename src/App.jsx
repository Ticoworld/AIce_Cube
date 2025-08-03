import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenSection from './components/TokenSection';
import MemesSection from './components/MemesSection';
import CommunitySection from './components/CommunitySection';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#1C2526] text-white">
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
      
      <Header />
      <HeroSection />
      <AboutSection />
      <TokenSection />
      <MemesSection />
      <CommunitySection />
      
      {/* Footer */}
      <motion.footer 
        className="py-8 border-t border-[#ADD8E6]/20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="font-['Space_Grotesk'] text-2xl mb-4">
            <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ICE</span>
          </div>
          <p className="text-[#87CEEB] mb-4">The meanest bot on Abstract</p>
          <p className="text-sm opacity-70 text-[#E0F6FF]">
            © {new Date().getFullYear()} $Aice. All rights reserved.
          </p>
        </div>
      </motion.footer>
      
      <ScrollToTop />
    </div>
  );
}

export default App;
