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