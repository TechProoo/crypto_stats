"use client"

import React from "react";
import { motion } from "motion/react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

const DevPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section with Animation */}
      <header className="text-center mb-12">
        <motion.h1
          className="text-5xl design_text font-extrabold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Developer's Corner
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Behind the scenes of CryptoStats
        </motion.p>
      </header>

      {/* About Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <h2 className="text-4xl design_text  font-semibold text-gray-800">
          About the Project
        </h2>
        <p className="text-lg text-gray-500 mt-4">
          CryptoStats is a real-time cryptocurrency tracking app designed to
          help you stay on top of the volatile world of crypto. Built with the
          latest web technologies, it provides users with live data on crypto
          prices, market cap, volume, and other essential stats. Whether you're
          a crypto enthusiast or a beginner, CryptoStats is tailored to offer a
          seamless experience.
        </p>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h2 className="text-4xl design_text font-semibold text-gray-800">
          Technologies Used
        </h2>
        <ul className="list-inside list-disc text-lg text-gray-500 mt-4">
          <li>
            <strong>Next.js</strong> — A powerful React framework for building
            scalable applications.
          </li>
          <li>
            <strong>TypeScript</strong> — Ensures type safety and better
            tooling.
          </li>
          <li>
            <strong>React</strong> — The UI library for building interactive
            interfaces.
          </li>
          <li>
            <strong>Tailwind CSS</strong> — A utility-first CSS framework for
            styling.
          </li>
          <li>
            <strong>CoinGecko API</strong> — Fetches real-time cryptocurrency
            data.
          </li>
          <li>
            <strong>Vercel</strong> — Fast and scalable hosting.
          </li>
        </ul>
      </motion.section>

      {/* Developer's Approach Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <h2 className="text-4xl design_text font-semibold text-gray-800">
          Development Approach
        </h2>
        <p className="text-lg text-gray-500 mt-4">
          The goal was to create a lightweight, fast, and intuitive user
          experience. The app is optimized for mobile and desktop, ensuring that
          users have an equally smooth experience. React and Next.js enable
          dynamic and responsive performance while keeping efficiency in mind.
        </p>
      </motion.section>

      {/* Developer Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <h2 className="text-4xl design_text font-semibold text-gray-800">
          Connect with the Developer
        </h2>
        <p className="text-lg text-gray-500 mt-4">
          Feel free to reach out for feedback, collaboration, or a chat about
          crypto. Always open to new ideas!
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <motion.a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
              <Twitter size={24} />
              <span>Twitter</span>
            </button>
          </motion.a>
          <motion.a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg">
              <Github size={24} />
              <span>GitHub</span>
            </button>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-700 text-white rounded-lg">
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </button>
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default DevPage;
