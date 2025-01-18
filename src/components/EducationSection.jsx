'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import pic from '@/images/education.jpg'

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Premier University Chitagong, Bangladesh',
      year: '2020 - 2024',
      CGPA: '3.9'
    },
    {
      degree: 'Higher Secondary School Certificate',
      institution: 'Kapasgola City Corporation Mohila College',
      year: '2018 - 2019',
      GPA: '4.00'
    }
  ]

  return (
    <section
      id='education'
      className='relative bg-center px-8 py-16 min-h-screen'
    >
      <Image
        src={pic}
        alt='Background Image'
        className='absolute inset-0 bg-opacity-20 bg-fixed w-full h-full object-cover'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>

      <div className='relative z-10 mx-auto max-w-5xl text-center text-white'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='font-bold text-4xl'
        >
          Education
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-4 text-lg'
        >
          My academic journey
        </motion.p>

        {/* Timeline */}
        <div className='relative mt-12'>
          {/* Vertical Line */}
          <div className='left-1/2 absolute bg-gray-300 w-1 h-full transform -trangray-x-1/2'></div>

          {/* Education Items */}
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col items-center ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } mb-12`}
            >
              {/* Connector Circle */}
              <div className='left-1/2 absolute bg-gray-300 rounded-full w-6 h-6 transform -trangray-x-1/2'></div>

              {/* Card */}
              <div
                className={`bg-white shadow-md p-6 rounded-lg max-w-sm text-gray-800 ${
                  index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'
                }`}
              >
                {/* Icon */}
                <div className='flex items-center mb-4'>
                  <FaGraduationCap className='mr-4 text-2xl text-gray-800' />
                  <h3 className='font-bold text-lg'>{item.degree}</h3>
                </div>
                {/* Institution */}
                <h4 className='pl-4 font-semibold text-gray-600 text-md'>
                  {item.institution}
                </h4>
                {/* Year */}
                <p className='mt-1 text-gray-500 text-sm'>{item.year}</p>
                {/* Description */}
                <p className='mt-3 text-gray-700 text-sm'>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
