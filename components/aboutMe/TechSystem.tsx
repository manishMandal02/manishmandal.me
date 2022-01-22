import { motion } from 'framer-motion';
import React from 'react';

const TechSystem = () => {
  const ballVariant = {
    initial: {
      x: 60,
      y: 0,
    },
    animate: {
      x: [60, -60],
      y: [-100, 100],
      transition: {
        repeat: Infinity,
        duration: 1.6,
        type: 'tween',
      },
    },
  };

  return (
    <div className='py-2 px-2 w-1/2 flex items-center justify-center'>
      <motion.div className='bg-red-400 border-2 border-slate-500 w-12 h-12 rounded-full'></motion.div>
      <motion.div
        className='bg-emerald-300 border-2 border-slate-500 w-12 h-12 rounded-full'
        variants={ballVariant}
        initial='initial'
        animate='animate'
      ></motion.div>
    </div>
  );
};

export default TechSystem;
