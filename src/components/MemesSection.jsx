import { motion } from 'framer-motion';
import { FaLaugh, FaFire, FaShare, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';

const MemesSection = () => {
  // State to track likes for each meme
  const [memeLikes, setMemeLikes] = useState({});
  const [userLikes, setUserLikes] = useState(new Set());

  // Load likes from localStorage on component mount
  useEffect(() => {
    const savedLikes = localStorage.getItem('aice-meme-likes');
    const savedUserLikes = localStorage.getItem('aice-user-likes');
    
    if (savedLikes) {
      setMemeLikes(JSON.parse(savedLikes));
    }
    if (savedUserLikes) {
      setUserLikes(new Set(JSON.parse(savedUserLikes)));
    }
  }, []);

  // Save likes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('aice-meme-likes', JSON.stringify(memeLikes));
    localStorage.setItem('aice-user-likes', JSON.stringify([...userLikes]));
  }, [memeLikes, userLikes]);
  // Function to copy meme URL to clipboard
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      // Create a temporary toast-like feedback
      const toast = document.createElement('div');
      toast.textContent = '🧊 Meme URL copied!';
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ADD8E6, #87CEEB);
        color: #1C2526;
        padding: 12px 24px;
        border-radius: 25px;
        font-weight: bold;
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
      `;
      document.body.appendChild(toast);
      
      // Remove toast after 2 seconds
      setTimeout(() => {
        toast.remove();
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  // Function to handle like/fire action  
  const handleLike = (memeId) => {
    if (userLikes.has(memeId)) {
      // Unlike - remove like
      setUserLikes(prev => {
        const newSet = new Set(prev);
        newSet.delete(memeId);
        return newSet;
      });
      setMemeLikes(prev => ({
        ...prev,
        [memeId]: Math.max((prev[memeId] || 0) - 1, 0)
      }));
    } else {
      // Like - add like
      setUserLikes(prev => new Set([...prev, memeId]));
      setMemeLikes(prev => ({
        ...prev,
        [memeId]: (prev[memeId] || 0) + 1
      }));
    }
  };

  // Memes data - includes GIFs and new image gallery
  const memes = [
    // Existing GIFs
    {
      id: 1,
      type: 'gif',
      src: '/gif1.mp4',
      title: 'Ice Cold Vibes',
      description: 'When $AICE hits different'
    },
    {
      id: 2,
      type: 'gif', 
      src: '/gif2.mp4',
      title: 'To the Moon',
      description: 'AIce Cube going parabolic'
    },
    {
      id: 3,
      type: 'gif',
      src: '/gif3.mp4', 
      title: 'Diamond Hands',
      description: 'HODLing $AICE like...'
    },
    {
      id: 4,
      type: 'gif',
      src: '/gif4.mp4',
      title: 'Bot Power',
      description: 'When the AI engagement hits'
    },
    // New image gallery
    {
      id: 5,
      type: 'image',
      src: '/image1.jpg',
      title: 'AIce Meme 1',
      description: 'Fresh AIce content'
    },
    {
      id: 6,
      type: 'image',
      src: '/image2.jpg',
      title: 'AIce Meme 2',
      description: 'More icy goodness'
    },
    {
      id: 7,
      type: 'image',
      src: '/image3.jpg',
      title: 'AIce Meme 3',
      description: 'The coldest takes'
    },
    {
      id: 8,
      type: 'image',
      src: '/image4.jpg',
      title: 'AIce Meme 4',
      description: 'Freezing the competition'
    },
    {
      id: 9,
      type: 'image',
      src: '/image5.jpg',
      title: 'AIce Meme 5',
      description: 'Ice cold community'
    },
    {
      id: 10,
      type: 'image',
      src: '/image6.jpg',
      title: 'AIce Meme 6',
      description: 'Chilling with $AICE'
    },
    {
      id: 11,
      type: 'image',
      src: '/image7.jpg',
      title: 'AIce Meme 7',
      description: 'The iciest meme yet'
    },
    // Bonus static images
    {
      id: 12,
      type: 'image',
      src: '/banner.png',
      title: 'AIce Banner',
      description: 'Official AIce branding'
    },
    {
      id: 13,
      type: 'image',
      src: '/gg.png',
      title: 'GG Vibes',
      description: 'Game over for competitors'
    },
    {
      id: 14,
      type: 'image',
      src: '/logo.png',
      title: 'AIce Logo',
      description: 'The mark of quality'
    },
    {
      id: 15,
      type: 'gif',
      src: '/gif5.gif',
      title: 'Animated Ice',
      description: 'Pure ice animation'
    }
  ];

  return (
    <section id="memes" className="py-20 relative overflow-hidden">
      {/* Animated background for Memes section */}
      <AnimatedBackground variant="community" />
      
      {/* Icy background effects */}
      <div className="absolute inset-0 frost-overlay"></div>
      <div className="absolute inset-0 ice-particles"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 font-['Space_Grotesk']"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice</span> <span className="text-[#87CEEB]">Memes</span>
        </motion.h2>

        <motion.p 
          className="text-center text-[#E0F6FF] mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The coldest memes in crypto. Share the <span className="text-[#00FF00]">A</span><span className="text-[#ADD8E6]">ice</span> vibes with your crew! 🧊
        </motion.p>

        {/* Memes Grid - Responsive: 2 cols mobile, 3 cols tablet, 5 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {memes.map((meme, index) => (
            <motion.div
              key={meme.id}
              className="bg-[#1C2526]/60 backdrop-blur-sm border border-[#ADD8E6]/30 rounded-xl overflow-hidden group hover:border-[#87CEEB]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Meme Content */}
              <div className="relative aspect-square overflow-hidden bg-black rounded-t-xl">
                {meme.type === 'gif' && meme.src.endsWith('.gif') ? (
                  <img 
                    src={meme.src} 
                    alt={meme.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : meme.type === 'gif' && meme.src.endsWith('.mp4') ? (
                  <video 
                    src={meme.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img 
                    src={meme.src} 
                    alt={meme.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                
                {/* Overlay with actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-4">
                    <motion.button
                      className="bg-[#ADD8E6] text-[#1C2526] p-3 rounded-full hover:bg-[#87CEEB] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(window.location.origin + meme.src)}
                      title="Share meme"
                    >
                      <FaShare />
                    </motion.button>
                    <motion.button
                      className={`p-3 rounded-full transition-colors flex items-center gap-1 ${
                        userLikes.has(meme.id) 
                          ? 'bg-[#FF4444] text-white hover:bg-[#FF6666]' 
                          : 'bg-[#00FF00] text-[#1C2526] hover:bg-[#00CC00]'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(meme.id)}
                      title={userLikes.has(meme.id) ? "Unlike meme" : "Like meme"}
                    >
                      {userLikes.has(meme.id) ? <FaHeart /> : <FaFire />}
                      <span className="text-xs font-bold">{memeLikes[meme.id] || 0}</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Meme Info */}
              <div className="p-3">
                <h3 className="text-sm font-bold text-[#ADD8E6] mb-1 font-['Space_Grotesk'] flex items-center gap-1">
                  <FaLaugh className="text-[#87CEEB] text-xs" />
                  {meme.title}
                </h3>
                <p className="text-[#E0F6FF] opacity-80 text-xs">{meme.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#ADD8E6] mb-4 font-['Space_Grotesk']">Got Ice Cold Memes?</h3>
          <p className="text-[#E0F6FF] mb-6">Share your best $AICE memes with the community!</p>
          <motion.a
            href={import.meta.env.VITE_TELEGRAM_URL || "https://t.me/aicecubeonabstract"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ADD8E6] to-[#87CEEB] text-[#1C2526] font-bold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaShare /> Share in Telegram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default MemesSection;
