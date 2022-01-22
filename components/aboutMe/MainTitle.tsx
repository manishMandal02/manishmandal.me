import React from 'react';
import { AnimationControls, motion } from 'framer-motion';
import {} from '../../src/animations/landingSection';

interface Props {
  controls: AnimationControls;
}

const MainTitle = () => {
  return (
    <motion.p
      className='m-0 flex items-center font-medium text-primary text-xl tracking-wide '
      //   variants={introNameVariant}
      //   initial='initial'
      //   animate='animate'
      // animate={controls}
    >
      <motion.span
        className=' font-extrabold -mt-5 font-mono  tracking-tighter'
        // variants={introNameLineVariant}
        // initial='initial'
        // // animate={controls}
        // animate='animate'
      >
        __
      </motion.span>{' '}
      &nbsp; About me
    </motion.p>
  );
};

export default MainTitle;
