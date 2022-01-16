import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  const planeVariants = {
    // intial: {
    //   rotateZ: -20,
    // },
    animate: {
      y: [0, -10, 0],
      rotateX: [-50, 50],
      rotateZ: [-1, 1, -1],
    },
  };

  const planeTransition = {
    y: {
      yoyo: Infinity,
      duration: 3,
      type: 'spring',
    },
    rotateX: {
      repeat: Infinity,
      duration: 3,
      type: 'spring',
    },
    rotateZ: {
      repeat: Infinity,
      duration: 3,
      type: 'tween',
    },
    rotateY: {
      repeat: Infinity,
      duration: 3,
      type: 'tween',
    },
  };

  // copy email
  const copyEmailHandler = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText('manishmandalj@gmail.com');
    }
  };
  return (
    <div className='flex w-full mx-24 mt-8'>
      {/* Left container */}
      <div className='flex flex-col w-1/2 items-start justify-center py-12 pl-32 '>
        <p className='m-0 flex items-center font-bold text-primary text-lg'>
          <span className=' font-bold text-xl -mt-4'>___</span> &nbsp; Hello, I am Manish Mandal
        </p>
        <p className='text-6xl font-bold text-slate-700 leading-none '>
          FullStack Web & App Developer <span className='-ml-2 text-xl'>🟠🟢🟣</span>{' '}
        </p>
        <p className='mt-10 text-3xl font-bold text-slate-800'>
          {' '}
          🎨Design<span className='text-5xl'>.</span> 👨‍💻Develop<span className='text-5xl'>.</span> 💹Market
          <span className='text-5xl'>.</span>
        </p>
        {/* Email */}
        <motion.div
          className='flex justify-center items-center mt-16 border-2 border-primary cursor-pointer rounded-lg hover:before:w-100 hover:before:h-full hover:before:bg-primary'
          onClick={copyEmailHandler}
        >
          <p className='m-0 border-r-2 border-primary py-2 px-4 text-primary text-4xl'>&#9993;</p>{' '}
          <p className='m-0 flex text-2xl text-center justify-center  py-2 px-4 '>
            {' '}
            manishmandalj@gmail.com{' '}
          </p>
        </motion.div>
      </div>
      {/* Right container */}
      <div className='flex flex-col w-1/2 items-center justify-center'>
        <motion.div
          //   className=''
          variants={planeVariants}
          initial='initial'
          animate='animate'
          transition={planeTransition}
        >
          <Image src='/plane.svg' className='w-full' width={400} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
