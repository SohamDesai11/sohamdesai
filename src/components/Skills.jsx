import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  SiAmazonwebservices,
  SiDocker,
  SiStripe,
  SiSupabase,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si'

const skillGroups = [
  {
    title: 'Languages',
    skills: [
      { id: 1, name: 'Python', Icon: SiPython },
      { id: 2, name: 'C++', Icon: SiCplusplus },
      { id: 3, name: 'C', Icon: SiC },
      { id: 4, name: 'JavaScript', Icon: SiJavascript },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { id: 5, name: 'HTML', Icon: SiHtml5 },
      { id: 6, name: 'CSS', Icon: SiCss3 },
      { id: 7, name: 'Tailwind', Icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { id: 8, name: 'Node.js', Icon: SiNodedotjs },
      { id: 9, name: 'Django', Icon: SiDjango },
      { id: 10, name: 'Flask', Icon: SiFlask },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { id: 11, name: 'SQL', Icon: SiMysql },
      { id: 12, name: 'MongoDB', Icon: SiMongodb },
      { id: 17, name: 'Supabase', Icon: SiSupabase },
      { id: 18, name: 'PostgreSQL', Icon: SiPostgresql },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { id: 13, name: 'AWS', Icon: SiAmazonwebservices },
      { id: 14, name: 'Docker', Icon: SiDocker },
      { id: 16, name: 'GitHub', Icon: SiGithub },
    ],
  },
  {
    title: 'Other',
    skills: [
      { id: 15, name: 'Stripe', Icon: SiStripe },

    ],
  },
]

const ROTATE_INTERVAL = 5000 // 5 seconds

const RotatingSkill = ({ skills }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (skills.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length)
    }, ROTATE_INTERVAL)
    return () => clearInterval(timer)
  }, [skills.length])

  const { name, Icon } = skills[index]

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-lg p-8 w-48 h-48 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3 text-gray-200"
        >
          <Icon size={56} />
          <span className="text-base font-medium">{name}</span>
        </motion.div>
      </AnimatePresence>

      {/* progress dots */}
      <div className="absolute bottom-3 flex gap-1.5">
        {skills.map((s, i) => (
          <span
            key={s.id}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? 'bg-purple-500' : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
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
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Technologies and tools I use regularly — from backend to design.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold text-purple-400 uppercase tracking-wide mb-4">
                {group.title}
              </h3>
              <RotatingSkill skills={group.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills