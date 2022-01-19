import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsArrowsExpand } from 'react-icons/bs';

const HeroSection = () => {
  // animation ref
  const planeControls = useAnimation();
  // state
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const planeVariants = {
    initial: {
      x: -1400,
      y: -500,
      rotateX: 30,
      rotateZ: 20,
    },
    animate: {
      y: 2,
      x: 1,
      rotateX: 10,
      rotateZ: -1,
      transition: {
        // duration: 1,
        type: 'spring',
        stiffness: 22,
        rotateZ: {
          duration: 2,
        },
        rotateX: {
          duration: 2,
        },
      },
    },
    whileInView: {
      y: [2, -8, 2],
      x: [1, -8, 1],
      rotateX: [10, -25, 10],
      rotateZ: [-1, 1, -1],
      transition: {
        stiffness: 150,
        repeat: Infinity,
        duration: 2.4,
        type: 'spring',
      },
    },
  };

  const planeAnimationSquence = async () => {
    await planeControls.start('animate');
    // scrollDownControls.start('animate');
    planeControls.start('whileInView');
  };

  planeAnimationSquence();

  const scrollDownContainerVariant = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        type: 'tween',
        delay: 2,
      },
    },
  };

  const scrollDownVariant = {
    onHover: {
      y: 8,
      transition: {
        duration: 0.2,
        type: 'spring',
        stiffness: 120,
      },
    },
  };

  // copy email
  const copyEmailHandler = async () => {
    if (navigator.clipboard) {
      setIsCopied(true);
      // console.log(await navigator.clipboard.readText());
      await navigator.clipboard.writeText('manishmandalj@gmail.com');
      setTimeout(() => {
        setIsCopied(false);
      }, 800);
    }
  };

  return (
    <div className='flex w-full mx-24 mt-8'>
      {/* Left container */}
      <div className='flex flex-col w-1/2 items-start justify-center py-12 pl-32 relative'>
        <p className='m-0 flex items-center font-semibold text-primary text-xl tracking-wide'>
          <span className=' font-extrabold -mt-5 font-mono  tracking-tighter'>____</span> &nbsp; Hello, I am
          Manish Mandal
        </p>
        <p className='text-6xl font-bold text-slate-700 leading-none '>
          FullStack Web & App Developer <span className='-ml-2 text-xl'>🟠🟢🟣</span>
        </p>
        <p className='mt-12 text-3xl font-semibold text-slate-700 mb-2'>
          🎨Design<span className='text-4xl'>.</span> 👨‍💻Develop<span className='text-4xl'>.</span> 💹Market
          <span className='text-4xl'>.</span>
        </p>
        {/* Email */}
        <motion.div
          className='relative group flex justify-center items-center mt-16 border-3 border-primary cursor-pointer rounded-md overflow-hidden border-collapse  shadow-primary  shadow-sm  transition-all  duration-300'
          onClick={copyEmailHandler}
        >
          <div className='hidden group-hover:flex m-0 p-0 absolute w-full h-full font-medium text-gray-50 text-base items-center tracking-wide justify-center border-5 rounded-sm border-primary  bg-primary z-10 opacity-90'>
            {isCopied ? 'Copied!' : 'Click to Copy'}
          </div>
          <p className='m-0  border-r-3 border-primary  py-2 px-4 text-primary  outline-none text-4xl'>
            &#9993;
          </p>
          <p className='m-0 flex text-xl font-medium tracking-wide text-center justify-center text-slate-700 py-2 px-4 '>
            manishmandalj@gmail.com
          </p>
        </motion.div>

        {/* Scroll Down */}
        <motion.div
          variants={scrollDownContainerVariant}
          initial='initial'
          animate='animate'
          className='absolute -bottom-24 -right-8 flex items-center'
        >
          <motion.div
            variants={scrollDownVariant}
            initial='initial'
            animate='animate'
            whileHover='onHover'
            className=' py-4 px-4 rounded-full shadow-md text-lg mr-4  scale-125 shadow-gray-300 cursor-pointer'
          >
            <BsArrowsExpand />
          </motion.div>
          <motion.p className='m-0 text-lg text-slate-500 font-medium cursor-default'>Scroll down</motion.p>
        </motion.div>
      </div>
      {/* Right container */}
      <div className='flex flex-col w-1/2 items-center justify-center'>
        <motion.div variants={planeVariants} initial='initial' animate={planeControls}>
          <Image src='/plane.svg' className='w-full' width={400} height={200} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
