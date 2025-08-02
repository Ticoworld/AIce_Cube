import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const StatsCounter = ({ end, duration = 2, label, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const startValue = 0;
    const endValue = parseInt(end);

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * (endValue - startValue) + startValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-4xl font-bold text-[#ADD8E6] font-['Space_Grotesk']">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-[#87CEEB] text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export default StatsCounter;
