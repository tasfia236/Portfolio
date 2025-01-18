'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaGitAlt,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaPhone,
  FaPython,
  FaLeaf
} from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

const SkillsSection = () => {
  const categories = [
    {
      title: 'Technical Skills',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-red-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'ReactJS', icon: <FaReact />, color: 'text-teal-500' },
        { name: 'NodeJS', icon: <FaNodeJs />, color: 'text-green-500' },
        { name: 'NextJS', icon: <RiNextjsFill />, color: 'text-black' },
        { name: 'MongoDB', icon: <FaLeaf />, color: 'text-green-700' }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C++', icon: <SiCplusplus />, color: 'text-sky-500' },
        { name: 'JavaScript', icon: <FaJsSquare />, color: 'text-yellow-500' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-500' }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Communication', icon: <FaPhone />, color: 'text-orange-500' },
        { name: 'Teamwork', icon: <FaUsers />, color: 'text-purple-500' },
        { name: 'Creativity', icon: <FaLightbulb />, color: 'text-yellow-600' },
        {
          name: 'Problem Solving',
          icon: <FaHandsHelping />,
          color: 'text-green-600'
        }
      ]
    }
  ]

  return (
    <section
      id='skill'
      className='bg-gradient-to-r from-slate-400 to-slate-600 px-8 py-16 min-h-screen'
    >
      <div className='mx-auto max-w-5xl text-center'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='font-bold text-4xl text-slate-800'
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-4 text-lg text-slate-700'
        >
          The tools, technologies, and personal attributes I excel in.
        </motion.p>

        {/* Skills Categories */}
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className='mt-12'
          >
            {/* Category Title */}
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='mb-6 font-semibold text-2xl text-slate-800'
            >
              {category.title}
            </motion.h3>

            {/* Skills Grid */}
            <div className='content-center gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 5, -5, 0]
                  }}
                  className='flex flex-col justify-center items-center bg-white shadow-md p-6 rounded-lg text-center transition-transform duration-300 ease-in-out'
                >
                  {/* Icon */}
                  <div
                    className={`text-5xl mb-4 ${skill.color} animate-spin-slow`}
                  >
                    {skill.icon}
                  </div>
                  {/* Skill Name */}
                  <h3 className='font-semibold text-lg text-slate-800'>
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
