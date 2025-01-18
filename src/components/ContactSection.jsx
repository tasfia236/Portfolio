'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import bgpic from '@/images/contact.jpeg'
import Image from 'next/image'
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const handleSubmit = event => {
    event.preventDefault()
    emailjs
      .sendForm(
        'service_akmwsiq',
        'template_1dbbsvn',
        event.target,
        'RQpnrZQjBkvRsknR5'
      )
      .then(
        result => {
          alert('Message sent successfully!')
          event.target.reset()
        },
        error => {
          alert('Failed to send the message. Please try again.')
        }
      )
  }

  return (
    <section className='relative bg-cover bg-center px-8 py-16 min-h-screen' id='contact'>
      <Image
        src={bgpic}
        alt='Background Image'
        className='absolute inset-0 w-full h-full object-cover'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-gray-900 bg-opacity-60'></div>

      {/* Content */}
      <div className='relative z-10 mx-auto max-w-6xl'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='font-bold text-4xl text-center text-white'
        >
          Get in <span className='text-teal-700'>Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-4 text-center text-gray-300 text-lg'
        >
          I'd love to hear from you! Whether it's a project, job opportunity, or
          just a chat.
        </motion.p>

        {/* Grid Layout */}
        <div className='gap-12 grid grid-cols-1 lg:grid-cols-2 mt-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className='bg-transparent shadow-sm hover:shadow-2xl p-8 rounded-lg transition duration-300'
          >
            <motion.h3
              whileHover={{ color: '#13c7d7' }}
              className='mb-6 font-semibold text-2xl text-gray-300'
            >
              Contact Information
            </motion.h3>
            <div className='space-y-6'>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  backgroundColor: '#F0F9FF'
                }}
                className='flex items-center p-3 rounded-lg transition duration-300'
              >
                <FaEnvelope className='mr-4 text-red-500 text-xl' />
                <span className='text-gray-200 text-lg'>
                  tasfiatabassum300@gmail.com
                </span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  backgroundColor: '#FEF9F3'
                }}
                className='flex items-center p-3 rounded-lg transition duration-300'
              >
                <FaPhoneAlt className='mr-4 text-blue-500 text-xl' />
                <span className='text-gray-200 text-lg'>
                  +880 (157) XXX-XXXX
                </span>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                  backgroundColor: '#F3F9F3'
                }}
                className='flex items-center p-3 rounded-lg transition duration-300'
              >
                <FaMapMarkerAlt className='mr-4 text-green-500 text-xl' />
                <span className='text-gray-200 text-lg'>
                  Chattogram, Bangladesh
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className='bg-gray-300 shadow-xl hover:shadow-2xl p-8 rounded-lg transition duration-300'
          >
            <h3 className='mb-6 font-semibold text-2xl text-gray-800'>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}> 
              <motion.div whileHover={{ scale: 1.03 }} className='mb-4'>
                <label
                  htmlFor='name'
                  className='block mb-2 font-medium text-gray-700'
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.00 }}
                  required
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name'
                  className='border-gray-300 px-4 py-2 border focus:border-teal-500 rounded-2xl focus:ring-2 focus:ring-teal-500 w-full text-gray-700 focus:outline-none'
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className='mb-4'>
                <label
                  htmlFor='email'
                  className='block mb-2 font-medium text-gray-700'
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.00 }}
                  required
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your Email'
                  className='border-gray-300 px-4 py-2 border focus:border-teal-500 rounded-2xl focus:ring-2 focus:ring-teal-500 w-full text-gray-700 focus:outline-none'
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} className='mb-4'>
                <label
                  htmlFor='message'
                  className='block mb-2 font-medium text-gray-700'
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.00 }}
                  id='message'
                  name='message'
                  required
                  rows='4'
                  placeholder='Your Message'
                  className='border-gray-300 px-4 py-2 border rounded-2xl focus:ring-2 focus:ring-teal-500 w-full text-gray-700 focus:outline-none'
                ></motion.textarea>
              </motion.div>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  backgroundColor: '#06b6d4'
                }}
                type='submit'
                className='bg-teal-500 hover:bg-cyan-500 shadow-md px-6 py-2 rounded-lg font-medium text-white transition duration-300'
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
