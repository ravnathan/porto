"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className=" text-white">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 h-screen">
        <motion.div
          className="relative w-96 h-96"
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3
          }}
        >
          <Image
            src="/me.png"
            alt="Dede Dermawan R"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-col space-y-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <h1 className="text-5xl">I'm Dede Dermawan R,</h1>
            <h1 className="text-5xl">A Web Developer</h1>
          </div>
          <p className="w-96">
            I am a junior web developer with a passion to learn and apply my
            knowledge to gain more experience in web developing. My ultimate
            goal is to make impact in the world even if it is very tiny, by
            creating such a great user experience for whoever visits my web.
          </p>
        </motion.div>
      </div>
      <h1 className="text-center text-6xl">Projects</h1>
    </div>
  );
}
