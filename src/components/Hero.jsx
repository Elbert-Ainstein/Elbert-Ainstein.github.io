import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import ComputersCanvas from './canvas/Computers.jsx'
import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  const originalName = "Elbert Ainstein"
  const originalGreet = "Hi, I'm"
  const [name, setName] = useState("Elbert Ainstein")
  const [greet, setGreet] = useState("Hi, I'm")

  const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'!-+"

  useEffect(() => {
    let iterations = 0

    const interval = setInterval(() => {
      let tempName = name
      tempName = tempName.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalName[index];
        }

        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("")
      setName(tempName)

      if (iterations >= originalName.length) stop(interval)

      iterations += 1 / 2;
    }, 50);

    const nameInterval = setInterval(() => {
      let tempGreet = greet
      tempGreet = tempGreet.split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalGreet[index];
        }

        return letters[Math.floor(Math.random() * letters.length)]
      })
      .join("")
      setGreet(tempGreet)

      if (iterations >= originalGreet.length) stop(nameInterval)

      iterations += 1 / 2;
    }, 100)

    return () => {
      clearInterval(interval);
    }
  }, [])

  function stop(interval) {
    console.log('stop')
    clearInterval(interval)
  }

  return (
    <section className="w-full relative h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            {greet} <span className="z-20 text-[#915eff]">{name}</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>
            I like to train Neural Networks,<br className='sm:block hidden'/> develop  websites, and play games
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex 
      justify-center items-center">
        <a href="#about">
          <div className="w-[36px] h-[64px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y: [0, 18, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            // className="w-3 h-3 rounded-full bg-secondary mb-1"
            >
              <FaArrowDown className="w-5 h-5 mb-2 " />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero