import React from 'react'
import { motion } from 'framer-motion'
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiDjango,
  SiFlask,
} from 'react-icons/si'

const skills = [
  { id: 1, name: 'Python', Icon: SiPython },
  { id: 2, name: 'C++', Icon: SiCplusplus },
  { id: 3, name: 'C', Icon: SiC },
  { id: 4, name: 'JavaScript', Icon: SiJavascript },
  { id: 5, name: 'Node.js', Icon: SiNodedotjs },
  { id: 6, name: 'HTML', Icon: SiHtml5 },
  { id: 7, name: 'CSS', Icon: SiCss3 },
  { id: 8, name: 'Tailwind', Icon: SiTailwindcss },
  { id: 9, name: 'SQL', Icon: SiMysql },
  { id: 10, name: 'MongoDB', Icon: SiMongodb },
  { id: 12, name: 'Django', Icon: SiDjango },
  { id: 13, name: 'Flask', Icon: SiFlask },
]

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, when: 'beforeChildren' },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
}

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl md:text-4xl text-white font-bold text-center mb-6"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Technologies and tools I use regularly — from backend to design.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map(({ id, name, Icon }) => (
            <motion.div
              key={id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-2 bg-gray-900 rounded-lg p-4 text-gray-200 hover:bg-purple-600 hover:text-white transition-shadow shadow-sm"
              aria-label={name}
            >
              <Icon size={36} />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
