import { motion } from 'framer-motion';
import { FaSnowflake, FaCircle } from 'react-icons/fa';

const AnimatedBackground = ({ variant = 'default' }) => {
  const getParticleConfig = () => {
    switch (variant) {
      case 'token':
        return {
          count: 8, // Reduced from 20
          colors: ['#ADD8E6', '#87CEEB'],
          sizes: [2, 3],
          icon: FaCircle
        };
      case 'community':
        return {
          count: 6, // Reduced from 15
          colors: ['#ADD8E6'],
          sizes: [3, 4],
          icon: FaSnowflake
        };
      case 'about':
        return {
          count: 10, // Reduced from 25
          colors: ['#ADD8E6', '#87CEEB'],
          sizes: [1, 2],
          icon: FaCircle
        };
      default:
        return {
          count: 12, // Reduced from 30
          colors: ['#ADD8E6', '#87CEEB'],
          sizes: [2, 3],
          icon: FaSnowflake
        };
    }
  };

  const config = getParticleConfig();
  const Icon = config.icon;

  const particles = Array.from({ length: config.count }, (_, i) => {
    const randomColor = config.colors[Math.floor(Math.random() * config.colors.length)];
    const randomSize = config.sizes[Math.floor(Math.random() * config.sizes.length)];
    const randomDelay = Math.random() * 3; // Reduced delay range
    const randomDuration = 12 + Math.random() * 8; // Slower animations
    const randomX = Math.random() * 100;

    return (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        style={{ 
          left: `${randomX}%`,
          color: randomColor,
          fontSize: `${randomSize * 3}px` // Smaller particles
        }}
        initial={{ 
          y: '100vh',
          opacity: 0
        }}
        animate={{
          y: '-100px',
          opacity: [0, 0.4, 0], // Reduced opacity
          x: [0, Math.random() * 50 - 25] // Less horizontal movement
        }}
        transition={{
          duration: randomDuration,
          delay: randomDelay,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Icon />
      </motion.div>
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default AnimatedBackground;
