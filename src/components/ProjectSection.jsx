'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { Boxes } from '@/ui/background-boxes'

const ProjectSection = () => {
  const projects = [
    {
      title: 'Travel Tourism',
      description:
        'A tour guide-based website offering unforgettable travel experiences! Explore our curated tour packages tailored for every traveler.',
      image: 'https://i.ibb.co/NsPk0wY/Travel-Tourism.png',
      techStack: [
        'HTML5',
        'TailwindCSS',
        'JavaScript',
        'Firebase',
        'React.js',
        'Node.js',
        'MongoDB'
      ],
      liveLink: 'https://tourist-guide-e209e.web.app/',
      githubLink: 'https://github.com/tasfia236/Travel-Tourism'
    },
    {
      title: 'Testy Food',
      description:
        'Explore our diverse menu featuring a variety of mouth-watering dishes crafted with the finest ingredients.',
      image: 'https://i.ibb.co/FHYcxSg/Testy-Food.png',
      techStack: [
        'HTML5',
        'TailwindCSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Firebase',
        'MongoDB'
      ],
      liveLink: 'https://testy-food-86b21.web.app/',
      githubLink: 'https://github.com/tasfia236/TestyFood'
    },
    {
      title: 'Liberty Tours (Southeast Asia)',
      description:
        'Find detailed information on must-visit attractions, unique experiences, and travel tips for countries like Thailand, Vietnam, and Indonesia.',
      image: 'https://i.ibb.co/dLDYQzH/Liberty-Tours.png',
      techStack: [
        'HTML5',
        'TailwindCSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Firebase',
        'MongoDB'
      ],
      liveLink: 'https://liberty-tours-70cb2.web.app/',
      githubLink: 'https://github.com/tasfia236/LibertyTours'
    }
  ]

  return (
    <section id='project' className='relative flex flex-col justify-center items-center bg-gradient-to-r from-slate-00 via-slate-500 to-slate-400 w-full h-screen overflow-hidden'>
      <div className='z-20 absolute inset-0 bg-slate-900 w-full h-full pointer-events-none [mask-image:radial-gradient(transparent,white)]' />
      <Boxes />
      {/* Content */}

      <div className='relative z-10 mx-auto max-w-6xl'>
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='font-bold text-4xl text-center text-teal-500'
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-4 text-center text-lg text-slate-900'
        >
          Take a look at some of my work and the technologies I’ve used.
        </motion.p>

        {/* Project Cards Grid */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
          className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 3, -3, 0],
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)'
              }}
              className='relative flex flex-col bg-cover bg-center shadow-lg rounded-lg h-full transform transition-transform duration-300 overflow-hidden'
              style={{
                backgroundImage: `url(${project.image})`,
                height: '400px'
              }}
            >
              {/* Overlay */}
              <div className='z-0 absolute inset-0 bg-black bg-opacity-80'></div>

              {/* Project Content */}
              <div className='relative z-10 flex flex-col flex-grow p-6 text-white'>
                <h3 className='font-bold text-xl'>{project.title}</h3>
                <p className='flex-grow mt-3'>{project.description}</p>
                <div className='flex-grow mt-4'>
                  <span className='font-semibold'>Tech Stack:</span>
                  <ul className='flex flex-wrap gap-2 mt-2'>
                    {project.techStack.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className='bg-slate-700 px-3 py-1 rounded-md text-sm'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='bottom-0 left-0 z-0 absolute flex justify-between items-center bg-slate-800 bg-opacity-90 px-6 py-3 w-full'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-blue-400 hover:text-blue-500'
                >
                  <FaExternalLinkAlt className='mr-2' />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-white hover:text-slate-300'
                >
                  <FaGithub className='mr-2' />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectSection
