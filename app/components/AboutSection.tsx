"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Career",
    id: "Career",
    content: (
      <ul className="list-disc pl-2"> 
        <li>Major in Computer Science</li>
        <li>Minor in Electrical Engineering</li>
        <li className="text-red-500">How was my RA experience connected to my career goals?</li>      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-red-500">What have I learned?</li>
        <li className="text-red-500">And how have I incorporated it?</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Career");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return ( // ' you have write &apos
    <section className="text-white" id="about">  
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <video
          width={600}
          height={600}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/IMG_3192.MOV" type="video/mp4" />
        </video>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">    
         First RA Semester: Fall 2025 
         <br />
         Portfolio Semester: Spring 2026
         <br />
         Hall: Unity Hall
         <br />
         GPA: 3.73
         <br />
         Expected Graduation Date: Spring 2028

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Career")}
              active={tab === "Career"}
            >
              {" "}
              Career{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Feedback{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;