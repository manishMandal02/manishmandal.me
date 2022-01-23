import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const TechSystem = () => {
  const techStackContainerVariant = {
    animate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: 'linear',
      },
    },
  };

  const techStackVariant = {
    animate0: {
      // rotate: -360,
    },
  };

  const jsLogo: string =
    'https://res.cloudinary.com/vastia/image/upload/v1615998801/portfolio/TechStack/javascript_ketvye.png';

  const mernTech: string[] = [
    'https://res.cloudinary.com/vastia/image/upload/v1615998803/portfolio/TechStack/react_wpgmkr.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642861709/portfolio/TechStack/nextjs_noqhb8.svg',
    'https://res.cloudinary.com/vastia/image/upload/v1615998802/portfolio/TechStack/node-js_b2crs4.png',
    'https://res.cloudinary.com/vastia/image/upload/v1642920970/portfolio/TechStack/express-1_pbocwy.png',
  ];

  return (
    <div className='py-4 px-4 w-1/2 flex items-center justify-center'>
      <motion.div
        variants={techStackContainerVariant}
        initial='initial'
        animate='animate'
        className='bg-white flex items-center justify-center shadowPlane1  border-slate-200 w-60 h-60 rounded-full relative '
      >
        {/* tech stacks */}
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 shadow-gray-200  w-14 h-14 rounded-full absolute -top-6 left-24 py-2 px-2`}
        >
          <Image src={mernTech[0]} height={50} width={50} className='z-20' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 w-14 h-14 rounded-full absolute top-24 -right-6 py-2 px-2`}
        >
          <Image src={mernTech[1]} height={50} width={50} className='z-20' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 w-14 h-14 rounded-full absolute top-20 -left-6 py-2 px-2`}
        >
          <Image src={mernTech[2]} height={50} width={50} className='z-20' />
        </motion.div>
        <motion.div
          className={`bg-white flex items-center justify-center shadowPlane0 w-14 h-14 rounded-full absolute top-52  left-20 py-2 px-2`}
        >
          <Image src={mernTech[3]} height={50} width={50} className='z-20 ' />
        </motion.div>
      </motion.div>
      {/* JS in center */}
      <motion.div
        variants={techStackVariant}
        animate='animate0'
        className='bg-white flex items-center justify-center shadow-sm shadow-gray-300 w-14 h-14 rounded-full absolute'
      >
        <Image src={jsLogo} layout='fill' className='z-20 rounded-full ' />
      </motion.div>
    </div>
  );
};

export default TechSystem;
