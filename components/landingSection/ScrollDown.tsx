import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { BsArrowsExpand } from 'react-icons/bs';
import { scrollDownContainerVariant, scrollDownVariant } from '../../src/animations/landingSection';

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (process.browser) {
    window.onscroll = () => {
      scrolled();
    };
  }
  const scrolled = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setIsVisible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className='fixed bottom-8 left-2/4 flex items-center'
            variants={scrollDownContainerVariant}
            initial='initial'
            animate='animate'
            id='scroll-btn'
            exit='exit'
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
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollDown;