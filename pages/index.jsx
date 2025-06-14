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
      {/* Enhanced Wispy Cloud Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[60%] h-[60%] top-10 left-10 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[50%] h-[50%] bottom-10 right-10 bg-blue-100 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[40%] h-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-50 opacity-20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute w-[30%] h-[30%] top-[15%] right-[20%] bg-purple-100 opacity-10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Top-right HALP Link */}
      <div className="absolute top-4 right-6 text-sm text-blue-800 font-medium z-20">
        <a href="/halp" className="hover:underline">HALP!</a>
      </div>

      {/* YAHN Logo - Increased 50% */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="text-[6rem] md:text-[12rem] font-bold text-blue-800 cursor-pointer z-10"
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
