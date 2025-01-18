'use client'
import React from 'react'
import { motion } from 'framer-motion'

const AboutUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section id='about' className='relative flex justify-center items-center bg-slate-800 px-8 md:px-16 py-16 w-full h-full'>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={containerVariants}
        className='items-center gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl'
      >
        {/* Left Section: Text Content */}
        <motion.div
          variants={itemVariants}
          className='lg:col-span-2 text-center md:text-left'
        >
          <motion.h2
            variants={itemVariants}
            className='font-bold text-4xl text-cyan-700'
          >
            About Me
          </motion.h2>
          <motion.h2
            variants={itemVariants}
            className='font-bold text-lg text-white'
          >
            Tasfia Tabassum <br />
            Frontend Developer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='mt-4 text-lg text-slate-100 leading-relaxed'
          >
            I'm a passionate web developer with years of experience creating
            beautiful, user-friendly interfaces. My mission is to bring ideas to
            life with creativity and technical expertise.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className='mt-2 text-lg text-slate-100 leading-relaxed'
          >
            My expertise spans HTML, CSS, JavaScript, and modern frameworks like
            React for front-end development, as well as Node.js and Express.js
            for backend solutions. I am proficient in managing databases such as
            MongoDB.
          </motion.p>
        </motion.div>
        {/* Highlighted Stats */}
        <motion.div
          variants={containerVariants}
          className='gap-4 grid grid-cols-1 mx-12 mt-12'
        >
          <motion.div
            variants={cardVariants}
            whileHover='hover'
            className='bg-slate-300 shadow-md hover:shadow-lg p-6 border-t-4 border-teal-500 rounded-lg text-center'
          >
            <h3 className='font-bold text-2xl text-teal-600'>1+</h3>
            <p className='mt-2 text-black'>Years Experience</p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover='hover'
            className='border-cyan-500 bg-slate-300 shadow-md hover:shadow-lg p-6 border-t-4 rounded-lg text-center'
          >
            <h3 className='font-bold text-2xl text-cyan-600'>10+</h3>
            <p className='mt-2 text-black'>Projects Completed</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AboutUsSection
