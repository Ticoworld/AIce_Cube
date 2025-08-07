import { motion } from 'framer-motion';

const GlitchText = ({ text }) => {
  const renderStyledText = (textContent, className) => {
    // Highlight both A and I in green for $AICE and Aice
    if (textContent === '$AICE') {
      return (
        <span className={className}>
          <span className="text-[#00FF00]">$A</span>
          <span className="text-[#00FF00]">I</span>
          <span className="text-[#ADD8E6]">CE</span>
        </span>
      );
    }
    if (textContent === 'Aice') {
      return (
        <span className={className}>
          <span className="text-[#00FF00]">A</span>
          <span className="text-[#00FF00]">I</span>
          <span className="text-[#ADD8E6]">ce</span>
        </span>
      );
    }
    return <span className={className}>{textContent}</span>;
  };

  return (
    <div className="relative inline-block">
      <motion.span 
        className="font-['Space_Grotesk'] text-5xl md:text-7xl relative z-10"
        data-text={text}
        animate={{ 
          textShadow: [
            '0 0 5px #ADD8E6, 0 0 10px #ADD8E6',
            '0 0 15px #ADD8E6, 0 0 20px #ADD8E6',
            '0 0 5px #ADD8E6, 0 0 10px #ADD8E6',
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {renderStyledText(text, "")}
      </motion.span>
      <motion.span 
        className="font-['Space_Grotesk'] absolute top-0 left-0 z-0 opacity-70 text-5xl md:text-7xl"
        animate={{ 
          x: [0, 2, -2, 1, 0],
          y: [0, -1, 1, -1, 0]
        }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        {renderStyledText(text, "text-[#87CEEB]")}
      </motion.span>
      <motion.span 
        className="font-['Space_Grotesk'] absolute top-0 left-0 z-0 opacity-50 text-5xl md:text-7xl"
        animate={{ 
          x: [0, -2, 2, -1, 0],
          y: [0, 1, -1, 1, 0]
        }}
        transition={{ 
          duration: 0.7,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      >
        {renderStyledText(text, "text-[#E0F6FF]")}
      </motion.span>
    </div>
  );
};

export default GlitchText;
