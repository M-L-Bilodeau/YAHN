<<<<<<< HEAD
// pages/index.jsx

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserIcon, UsersIcon, HelpCircleIcon } from 'lucide-react';

export default function Home() {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOptions(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-[#fefefe] via-[#f0f4f8] to-[#dde5eb] flex items-center justify-center overflow-hidden">
      {/* Wispy Background Texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[60%] h-[60%] top-10 left-10 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[50%] h-[50%] bottom-10 right-10 bg-blue-100 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Top-right HALP Link */}
      <div className="absolute top-4 right-6 text-sm text-blue-800 font-medium">
        <a href="/halp" className="hover:underline">HALP!</a>
      </div>

      {/* YAHN Logo */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-6xl md:text-8xl font-bold text-blue-800 cursor-pointer z-10"
          onClick={() => setShowOptions(!showOptions)}
        >
          YAHN
        </motion.div>
      </AnimatePresence>

      {/* Navigation Options */}
      {showOptions && (
        <motion.div
          className="absolute bottom-20 flex gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Option icon={<UserIcon className="w-8 h-8" />} text="Personal" href="/personal" />
          <Option icon={<UsersIcon className="w-8 h-8" />} text="Group" href="/group" />
          <Option icon={<HelpCircleIcon className="w-8 h-8" />} text="About" href="/about" />
        </motion.div>
      )}
    </div>
  );
}

function Option({ icon, text, href }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center text-blue-800 hover:text-blue-500 transition-colors"
    >
      {icon}
      <span className="mt-2 text-lg font-medium">{text}</span>
    </a>
  );
}
=======
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-200 via-white to-pink-100 flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl"
      >
        <div className="text-6xl md:text-7xl font-extralight mb-4">YAHN</div>
        <p className="text-xl md:text-2xl italic text-gray-700">
          You made it. I'm happy you're here. Welcome.
        </p>
      </motion.div>
    </main>
  );
}
>>>>>>> 025d352 (Desktop 060425 1042)
