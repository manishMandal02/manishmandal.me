import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowsExpand } from 'react-icons/bs';
import { scrollDownContainerVariant, scrollDownVariant } from '../../src/animations/landingSection';

const ScrollDown = () => {
  return (
    <>
      <motion.div
        className='absolute -bottom-24 -right-10 flex items-center'
        variants={scrollDownContainerVariant}
        initial='initial'
        animate='animate'
      >
        <motion.div
          variants={scrollDownVariant}
          whileHover='onHover'
          className=' py-4 px-4 rounded-full shadow-md text-lg mr-4  scale-125 shadow-gray-300 cursor-pointer'
        >
          <BsArrowsExpand />
        </motion.div>
        <motion.p className='m-0 text-lg text-slate-500 font-medium cursor-default'>Scroll down</motion.p>
      </motion.div>
    </>
  );
};

export default ScrollDown;
