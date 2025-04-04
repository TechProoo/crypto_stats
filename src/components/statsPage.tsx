"use client";

import React from "react";
import { motion } from "framer-motion";
import { CryptoData } from "@/app/[name]/page";

interface CryptoProp {
  data: CryptoData | null;
}

const statsPage: React.FC<CryptoProp> = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  if (!data) return null; // Ensure data exists before rendering

  return (
    <motion.div
      className="crypto-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{
        maxWidth: "400px",
        margin: "2rem auto",
        padding: "1.5rem",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <motion.div
        className="crypto-header"
        variants={fadeIn}
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <img
          src={data.image}
          alt={data.name}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "1rem",
          }}
        />
        <div>
          <h2 style={{ margin: 0, fontSize: "1.5rem" }}>{data.name}</h2>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#94a3b8" }}>
            {data.symbol.toUpperCase()}
          </p>
        </div>
      </motion.div>

      {/* Current Price */}
      <motion.div
        className="crypto-price"
        variants={fadeIn}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        ${data.current_price.toLocaleString()}
      </motion.div>

      {/* Market Stats */}
      <motion.div
        className="crypto-stats"
        variants={fadeIn}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          fontSize: "0.9rem",
        }}
      >
        <div>
          <p style={{ margin: 0, color: "#94a3b8" }}>Market Cap</p>
          <p style={{ margin: 0 }}>${data.market_cap.toLocaleString()}</p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#94a3b8" }}>24h Volume</p>
          <p style={{ margin: 0 }}>${data.total_volume.toLocaleString()}</p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#94a3b8" }}>24h High</p>
          <p style={{ margin: 0 }}>${data.high_24h.toLocaleString()}</p>
        </div>
        <div>
          <p style={{ margin: 0, color: "#94a3b8" }}>24h Low</p>
          <p style={{ margin: 0 }}>${data.low_24h.toLocaleString()}</p>
        </div>
      </motion.div>

      {/* Price Change */}
      <motion.div
        className="crypto-change"
        variants={fadeIn}
        style={{
          marginTop: "1.5rem",
          padding: "1rem",
          borderRadius: "10px",
          background:
            data.price_change_percentage_24h < 0 ? "#dc2626" : "#16a34a",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "1rem", fontWeight: "bold" }}>
          {data.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p style={{ margin: 0, fontSize: "0.8rem" }}>24h Change</p>
      </motion.div>
    </motion.div>
  );
};

export default statsPage;
