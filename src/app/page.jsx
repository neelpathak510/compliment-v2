"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroScreen from "@/components/screens/IntroScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import OutroScreen from "@/components/screens/OutroScreen";
import ValentineScreen from "@/components/screens/ValentineScreen";
import LetterScreen from "@/components/screens/LetterScreen";



export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
  <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
  <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(2)} />,
  <LetterScreen key="letter" onNext={() => setCurrentScreen(3)} />,
  <MessageScreen key="message" onNext={() => setCurrentScreen(4)} />,
  <ValentineScreen key="valentine" onYes={() => setCurrentScreen(5)} />,
  <OutroScreen key="outro" />
]
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden" >

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="px-4 py-6 will-change-transform"
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div>
    </div >
  );
}
