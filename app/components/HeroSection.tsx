"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> I&apos;m a{" "}</span>
            <br></br>
            <TypeAnimation
                sequence={[
                    "Resident Assistant",
                    1500,
                    "Tutor",
                    1500,
                    "Orientation Leader",
                    1500,
                    "Vice-President",
                    1500,
                    "Student",
                    1500,
                    "Son",
                    1500,
                    "Brother",
                    1500,
                    "Twin",
                    1500,
                    "Friend",
                    1500,
                    "Shoulder to rely on",
                    1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          &ldquo;Fear has killed more dreams than Failure.&ldquo;
          </p>
          <div>
          <Link
            href="https://photos.google.com/album/AF1QipPbPrjaF1Y5m_ro7vgZydvdlroyqSEA8Edrye-t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 boder border-white mt-3 text-white"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Memories
            </span>
          </Link>
           
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/FootballGame1.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover"
            width={350}
            height={200}
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;