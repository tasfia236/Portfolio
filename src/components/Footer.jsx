'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-slate-900 to-slate-700 py-12 text-slate-200'>
      <div className='mx-auto px-8 container'>
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex lg:flex-row flex-col justify-between items-center mb-8'
        >
          {/* Brand / Logo */}
          <div className='mb-6 lg:mb-0'>
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className='font-bold text-3xl text-teal-400'
            >
              Tasfia Tabassum
            </motion.h1>
            <p className='mt-2 text-slate-400'>
              Creating digital experiences with passion and precision.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className='flex space-x-6 text-sm'>
            <a
              href='https://www.linkedin.com/in/tasfia-tabassum-70a01a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-500 hover:text-teal-600'
            >
              <FaLinkedin className='text-2xl text-white' />
            </a>
            <a
              href='https://github.com/tasfia236'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-500 hover:text-teal-600'
            >
              <FaGithub className='text-2xl text-white' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100071821149834'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-500 hover:text-teal-600'
            >
              <FaFacebook className='text-2xl text-white' />
            </a>
            <a
              href='https://www.instagram.com/profile.php?id=100071821149834'
              target='_blank'
              rel='noopener noreferrer'
              className='text-teal-500 hover:text-teal-600'
            >
              <FaInstagram className='text-2xl text-white' />
            </a>
          </ul>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className='border-slate-600 my-6'
        />

        {/* Bottom Section */}
        <div className='flex lg:flex-row flex-col justify-center items-center'>
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='text-center text-slate-400 text-sm'
          >
            &copy; {new Date().getFullYear()} Tasfia Tabassum. All rights
            reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
