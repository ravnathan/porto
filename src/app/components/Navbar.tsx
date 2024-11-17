import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center text-white font-semibold py-5 px-6 md:px-20 fixed z-10 w-full"
    >
      <p className="text-lg">Dede Dermawan R</p>
      <div className="hidden md:flex gap-6">
        <p className="hover:underline cursor-pointer">Home</p>
        <p className="hover:underline cursor-pointer">Projects</p>
        <p className="hover:underline cursor-pointer">Contact Me</p>
      </div>
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-gray-800 text-center flex flex-col gap-4 py-4 md:hidden"
        >
          <p className="hover:underline cursor-pointer">Home</p>
          <p className="hover:underline cursor-pointer">Projects</p>
          <p className="hover:underline cursor-pointer">Contact Me</p>
        </motion.div>
      )}
    </motion.div>
  );
}
