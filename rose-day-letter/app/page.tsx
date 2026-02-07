"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function RoseDay() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen bg-rose-100 flex items-center justify-center overflow-hidden relative">
      
      {/* Floating Roses */}
      {[...Array(8)].map((_, i) => (
        <motion.img
          key={i}
          src="/rose.png"
          alt="rose"
          className="w-16 h-16 absolute opacity-70"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Envelope */}
      {!opened && (
        <motion.div
          className="w-72 h-48 bg-white rounded-lg shadow-xl flex items-center justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpened(true)}
        >
          <p className="text-rose-500 text-xl font-semibold">
            💌 Open Letter
          </p>
        </motion.div>
      )}

      {/* Letter */}
      {opened && (
        <motion.div
          className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-md"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <motion.h1
            className="text-4xl font-bold text-rose-600 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            🌹 Happy Rose Day, Mahi 🌹
          </motion.h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            Just like roses brighten the world,
            you bring warmth, beauty, and happiness
            into my life every single day.
          </p>

          <motion.div
            className="mt-6 text-rose-500 text-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ❤️
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
