'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils.js'

export const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)
  let colors = [
    '--sky-300',
    '--pink-300',
    '--green-300',
    '--yellow-300',
    '--red-300',
    '--purple-300',
    '--blue-300',
    '--indigo-300',
    '--violet-300'
  ]
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`
      }}
      className={cn(
        'absolute left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 ',
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className='relative border-slate-700 border-l w-16 h-8'
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `var(${getRandomColor()})`,
                transition: { duration: 0 }
              }}
              animate={{
                transition: { duration: 2 }
              }}
              key={`col` + j}
              className='relative border-slate-700 border-t border-r w-16 h-8'
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='-top-[14px] -left-[22px] absolute w-10 h-6 text-slate-700 pointer-events-none stroke-[1px]'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v12m6-6H6'
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
