"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";

export default function ValentineScreen({ onYes }) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const dodge = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ x, y });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-4 overflow-hidden">
      <motion.h1
        className="text-5xl font-bold text-pink-600 mb-12"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Will you be my Valentine? 💖
      </motion.h1>

      <div className="relative flex gap-8">
        <Button onClick={onYes}>Yes 💘</Button>

        <motion.div
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 300 }}
          onMouseEnter={dodge}
        >
          <Button variant="outline">No 🙈</Button>
        </motion.div>
      </div>
    </div>
  );
}
 