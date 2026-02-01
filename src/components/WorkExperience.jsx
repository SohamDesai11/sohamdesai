import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aifinancialLogo from "../assets/AiFinancial.jpg";
import cwLogo from "../assets/cw.png";

const experiences = [
  {
    id: 1,
    title: "Data Analyst Co-Op",
    company: "Ai Financial",
    date: "May. 2025 - Aug. 2025",
    bullets: [
      "Built and optimized SQL Server procedures and Python automation pipelines to compute key investment metrics (IRR, XIRR, ROI), cutting ROI runtime by 70%",
      "Engineered robust ETL workflows with validation, checksums, and logging to ensure reliable, production‑grade data processing.",
      "Delivered contract‑ and fund‑level performance reporting that supported data‑driven decisions across business teams"
    ],
    color: "bg-white text-[#0e0c1e]",
    logo: aifinancialLogo,
    logoText: "AF"
  },
  {
    id: 2,
    title: "Acccess Control Associate",
    company: "Canada's Wonderland",
    date: "May 2023 - Dec. 2023",
    bullets: [
      "Operated x-ray and body scanning equipment to prevent prohibited items from being carried onto the premises.",
      "Performed daily checks of building entrances, exits, and perimeters.",
      "Identified suspicious activity to determine appropriate responses."
    ],
    color: "bg-white text-[#0e0c1e]",
    logo: cwLogo,
    logoText: "CW"
  },
];

const WorkExperience = () => {
  const [selected, setSelected] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div id="work-experience" className="py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl text-white font-bold text-center mb-6"
        >
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-12 text-gray-400 text-center"
        >
          My professional journey — roles I've held and what I accomplished.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left column: timeline / list */}
          <div className="space-y-6 md:col-span-1">
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setSelected(idx)}
                className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
                  selected === idx ? "bg-[#241733] shadow-lg" : "hover:bg-slate-900"
                }`}
                aria-pressed={selected === idx}
              >
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${exp.color} font-bold text-sm`}
                >
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    exp.logoText
                  )}
                </div>
                <div>
                  <h4 className={`text-lg font-semibold ${selected === idx ? "text-white" : "text-slate-200"}`}>
                    {exp.title}
                  </h4>
                  <p className="text-sm text-slate-400">{exp.company}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right column: details */}
          <div className="md:col-span-2">
            <motion.div
              key={experiences[selected].id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="bg-[#2a1f36] rounded-xl p-8 text-white shadow-lg"
            >
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">{experiences[selected].title}</h3>
                <p className="text-slate-300 ">{experiences[selected].company}</p>
                <p className="text-slate-400 ">{experiences[selected].date}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-slate-200 mt-4">
                {experiences[selected].bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">{b}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
