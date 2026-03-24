"use client";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [tag, setTag] = useState("CommUNITY");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experience
      </h2>

      {/* TAGS */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="CommUNITY"
          isSelected={tag === "CommUNITY"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Critical Thinking"
          isSelected={tag === "Critical Thinking"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BASICS"
          isSelected={tag === "BASICS"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Highligths"
          isSelected={tag === "Highligths"}
        />
      </div>

      {/* CONTENT DISPLAY */}
      <div className="flex justify-center items-center mt-8">
        <motion.div
          key={tag}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-10000 p-6 rounded-xl border border-gray-12 w-[60%]"
        >
          {tag === "CommUNITY" && (
            <div className="flex gap-6 justify-center">
              <img
                src="/images/commUNITY1.png"
                alt="community-1"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
              <img
                src="/images/commUNITY2.png"
                alt="community-2"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
            </div>
          )}

          {tag === "Critical Thinking" && (
              <div className="flex gap-6 justify-center">
              <img
                src="/images/Critical_Thinking1.png"
                alt="critical-thinking-1"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
              <img
                src="/images/Critical_Thinking2.png"
                alt="critical-thinking-2"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
            </div>
          )}

          {tag === "Programming" && (
            <div className="flex gap-6 justify-center">
              <img
                src="/images/Programming1.png"
                alt="programming-1"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
              <img
                src="/images/Programming2.png"
                alt="programming-2"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
            </div>
          )}

          {tag === "BASICS" && (
            <div className="flex gap-6 justify-center">
              <img
                src="/images/BASICS1.png"
                alt="basics-1"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
              <img
                src="/images/BASICS2.png"
                alt="basics-2"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
            </div>
          )}

          {tag === "Highlights" && (
            <div className="flex gap-6 justify-center">
              <img
                src="/images/Highlights1.png"
                alt="highlights-1"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
              <img
                src="/images/Highlights2.png"
                alt="highlights-2"
                className="w-1/2 h-85 object-cover rounded-lg"
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;