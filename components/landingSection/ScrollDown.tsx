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
            className='fixed  bottom-8 ms:bottom-4 left-2/4 ms:left-40 flex items-center ms:flex-col-reverse'
            variants={scrollDownContainerVariant}
            initial='initial'
            animate='animate'
            id='scroll-btn'
            exit='exit'
          >
            <motion.div
              variants={scrollDownVariant}
              whileHover='onHover'
              className=' py-4 px-4 rounded-full shadow-md text-lg mr-4 scale-125 ms:text-base ms:py-3 ms:px-3 shadow-gray-300 cursor-pointer '
            >
              <BsArrowsExpand />
            </motion.div>
            <motion.p className='m-0 ms:mb-1 text-lg ms:text-base text-slate-500 font-medium  cursor-default'>
              Scroll down
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollDown;
