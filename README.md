# 🚀 CryptoStats

CryptoStats is a sleek, real-time cryptocurrency tracking platform that delivers up-to-date prices, market trends, and insights in a **minimalist and fast** interface. Built with **Next.js, TypeScript, and Framer Motion**, it ensures an ultra-smooth experience for traders and crypto enthusiasts alike.

## 🌟 Features

✅ **Live Market Data** – Real-time prices, market caps, and 24H changes.  
✅ **Beautiful UI** – Clean, modern, and easy to use.  
✅ **Smooth Page Transitions** – Powered by Framer Motion.  
✅ **CoinGecko API Integration** – Reliable and accurate data.  
✅ **Dark Mode Support** – Eye-friendly design.

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Animations:** Framer Motion
- **Data Source:** CoinGecko API

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cryptostats.git
   cd cryptostats
   Install dependencies:
   ```

bash
Copy
Edit
npm install

# or

yarn install
Run the development server:

bash
Copy
Edit
npm run dev

# or

yarn dev
Open http://localhost:3000 in your browser.

🔗 API Configuration
CryptoStats fetches data from CoinGecko's API. No API key is required, but make sure to respect rate limits.

API Endpoint Used:

bash
Copy
Edit
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1
📌 Project Structure
bash
Copy
Edit
/cryptostats
│── /app # Next.js App Router
│── /components # Reusable UI components
│── /styles # Global styles (Tailwind)
│── /lib # API calls & utilities
│── /public # Static assets
│── /pages # (If using Pages Router)
│── README.md # Project documentation
🎨 UI & Animations
CryptoStats uses Framer Motion for smooth transitions. If you encounter issues, ensure you have:

Copy
Edit
npm install framer-motion
🚀 Deployment
Easily deploy on Vercel:

bash
Copy
Edit
vercel deploy
📜 License
This project is open-source under the MIT License. Feel free to fork and contribute!

> > > > > > > e272ec26aff5db24eaa5b7344bfe577c3a913fd4
