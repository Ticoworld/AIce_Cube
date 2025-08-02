# AIce Cube 🧊

The meanest bot on Abstract blockchain, combining AI technology with hip-hop culture.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ticoworld/AIce_Cube.git
   cd AIce_Cube
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your actual values.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_CONTRACT_ADDRESS` | Token contract address (leave empty to show "CA: Soon™") | Empty |
| `VITE_TELEGRAM_URL` | Telegram community link | `https://t.me/aicecubeonabstract` |
| `VITE_TWITTER_URL` | Twitter/X profile link | `https://x.com/cubeonabstract` |
| `VITE_DEX_SCREENER_URL` | DexScreener chart link | Empty |
| `VITE_UNISWAP_URL` | Uniswap swap link | Empty |

### Example .env file:
```env
# Contract Address - Leave empty to show "CA: Soon™"
VITE_CONTRACT_ADDRESS=0x1234567890abcdef1234567890abcdef12345678

# Social Media Links
VITE_TELEGRAM_URL=https://t.me/aicecubeonabstract
VITE_TWITTER_URL=https://x.com/cubeonabstract

# Trading Links
VITE_DEX_SCREENER_URL=https://dexscreener.com/abstract/0x1234567890abcdef1234567890abcdef12345678
VITE_UNISWAP_URL=https://app.uniswap.org/swap?outputCurrency=0x1234567890abcdef1234567890abcdef12345678
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Icy Theme**: Cool blue gradients with frost effects
- **Performance Optimized**: Reduced animations for better performance
- **Environment Driven**: Easy configuration through environment variables
- **Modern Stack**: React + Vite + Tailwind CSS + Framer Motion

## 🌐 Deployment

The site can be deployed to any static hosting platform:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📱 Contract Integration

When you deploy your token:

1. Update `VITE_CONTRACT_ADDRESS` in your `.env` file
2. The site will automatically:
   - Display the actual contract address instead of "CA: Soon™"
   - Enable the copy function for the contract address
   - Make trading buttons functional

## 🧊 About AIce

AIce combines the power of AI technology with the raw energy of hip-hop culture, inspired by the legendary rapper Ice Cube. Our mission is to create the most powerful, no-nonsense AI bot on the Abstract chain.

---

Built with ❄️ by the AIce team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
