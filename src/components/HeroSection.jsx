'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '../ui/background-beams.jsx'
import { cn } from '@/lib/utils.js'
import { FaDownload } from 'react-icons/fa'

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative flex flex-col justify-center items-center bg-gray-900 rounded-lg w-full h-screen overflow-hidden'>
      {/* Left Toggle Icon */}
      <div className={cn('top-4 left-4 z-50 absolute')}>
        <button
          onClick={toggleMenu}
          className='fixed p-4 rounded-full focus:outline-none text-white'
        >
          {isMenuOpen ? (
            <span className='font-semibold text-2xl'>✕</span>
          ) : (
            <span className='font-semibold text-2xl'>☰</span>
          )}
        </button>
      </div>

      {/* Left Navigation Menu */}
      <motion.div
        initial={{ x: -1700 }}
        animate={{ x: isMenuOpen ? 0 : -1700 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 h-full w-64 bg-slate-800 bg-opacity-60 items-center text-white shadow-lg flex flex-col  justify-center p-6 z-40`}
      >
        <ul className='space-y-6 font-medium text-lg text-center'>
          <li>
            <a href='/'>HOME</a>
          </li>
          <li>
            <a href='#about'>ABOUT ME</a>
          </li>
          <li>
            <a href='#skill'>MY SKILLS</a>
          </li>
          <li>
            <a href='#education'>EDUCATION</a>
          </li>
          <li>
            <a href='#project'>MY PROJECTS</a>
          </li>
          <li>
            <a href='#contact'>CONTACT</a>
          </li>
        </ul>
      </motion.div>

      {/* Main Content */}
      <section className='absolute flex flex-row justify-between items-center ml-0 md:ml-12 px-8 sm:px-12 lg:px-32 min-h-screen md:xp-20'>
        {/* Right Section: Hero Text */}
        <div className='flex-1 mt-8 ml-0 md:ml-12 md:text-left text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className='opacity-0 scale-90 transform'
          >
            <h1 className='font-bold text-white text-4xl md:text-5xl'>
              Hi, I'm <span className='text-teal-600'>Tasfia Tabassum</span>
            </h1>
          </motion.div>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='font-bold text-black text-4xl md:text-5xl'
          >
            <span className='text-teal-500'>Web Developer</span>
          </motion.h1>

          <div className='z-50 relative flex justify-center md:justify-start space-x-4 mt-8'>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className='bg-black hover:bg-teal-700 px-6 py-2 rounded font-medium text-white transition'
              href='#contact'
            >
              Contact Me
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className='flex justify-center items-center gap-2 hover:bg-white px-6 py-2 border border-white rounded font-medium text-white hover:text-black transition'
              href='/pdf/Frontend Resume(Tasfia).pdf'
              download='Frontend Resume(Tasfia).pdf'
            >
              <FaDownload />
              Download CV
            </motion.a>
          </div>
        </div>
      </section>
      <BackgroundBeams />
    </div>
  )
}

export default HeroSection
