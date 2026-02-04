"use client";


import { motion } from "framer-motion";

export default function OutroScreen() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-pink-100 overflow-hidden">
      
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{
            opacity: 0,
            y: 40,
            x: Math.random() * 300 - 150,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: -400,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          💖
        </motion.span>
      ))}

      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OMG YAYAYAYAY I LOVEE YOU BABBYYYY 💕
      </motion.h1>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-2xl mb-3 z-10 bg-white p-2 ring-4 ring-pink-200"

      >
        <img
  src="/us.jpg"
  alt="My favorite picture of us"
  className="w-[320px] h-[420px] object-cover rounded-xl"
/>
      </motion.div>

      <motion.p
        className="text-sm text-gray-600 italic mb-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        my favorite picture of us!
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 max-w-md z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Every moment with you means more than I can put into words.
        I’m so grateful for us , I LOVE MY CUTE ANGRY BIRDDD🤍
      </motion.p>
    </div>
  );
}
