"use client";
import React, { useState } from "react";
//import GithubIcon from "/public/github-icon.svg";
//import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Handshake, Instagram, Linkedin } from "lucide-react";

const Contact = () => {

  return (
    
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Contact Me
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Email: edgar.bello01@utrgv.edu
        </p>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Phone: (956) 340-9066
        </p>
        <div className="socials flex flex-row gap-2">
        <Link href="https://utrgv.joinhandshake.com/profiles/tdchjj">
          <Handshake className="text-white w-11 h-11 hover:text-gray-400" />
        </Link>
          <Link href="https://www.linkedin.com/in/edgar-bello-80145b325/">
            <Linkedin className="text-white w-11 h-11 hover:scale-110 transition-transform" />
          </Link>

          <Link href="https://www.instagram.com/cowbots.robotics/">
            <Instagram className="text-white w-11 h-11 hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

//This is a comment

export default Contact;