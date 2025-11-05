// src/components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "BestBuy",
    location: "Minnesota, USA",
    duration: "Jan 2024 – Present",
  },
  {
    company: "PayPal",
    location: "California, USA",
    duration: "Aug 2022 – Dec 2023",
  },
  {
    company: "MasterCard",
    location: "Missouri, USA",
    duration: "Jun 2020 – Jul 2022",
  },
  {
    company: "7-Eleven",
    location: "New York, USA",
    duration: "Mar 2019 – May 2020",
  },
  {
    company: "Sonata Software",
    location: "Bangalore, India",
    duration: "Feb 2014 – Dec 2017",
  },
  {
    company: "Apollo Health Systems",
    location: "Hyderabad, India",
    duration: "Mar 2013 – Jan 2014",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen w-full bg-[#0a0a0a] text-gray-200 flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
      >
        My Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded-2xl bg-[#111]/80 backdrop-blur-md border border-gray-800 p-8 hover:border-transparent hover:shadow-[0_0_25px_#7b61ff40] transition-all duration-500"
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-blue-400 mr-3" size={22} />
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                {exp.company}
              </h3>
            </div>

            <div className="flex items-center gap-3 mb-2 text-gray-400">
              <FaMapMarkerAlt className="text-purple-400" />
              <p>{exp.location}</p>
            </div>

            <div className="flex items-center gap-3 text-gray-400">
              <FaCalendarAlt className="text-pink-400" />
              <p>{exp.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;