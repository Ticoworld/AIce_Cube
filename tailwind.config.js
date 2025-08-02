module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aice-dark': '#1C2526',
        'aice-ice': '#ADD8E6',
        'aice-light': '#E0F6FF',
        'aice-blue': '#87CEEB',
      },
      fontFamily: {
        'graffiti': ['"Bubblegum Sans"', 'cursive'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate': 'rotate 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
          '10%': { clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)' },
          '20%': { clipPath: 'polygon(0 66%, 100% 66%, 100% 66%, 0 66%)' },
          '30%': { clipPath: 'polygon(0 66%, 100% 66%, 100% 33%, 0 33%)' },
          '40%': { clipPath: 'polygon(0 33%, 100% 33%, 100% 66%, 0 66%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    },
  },
  plugins: [],
};