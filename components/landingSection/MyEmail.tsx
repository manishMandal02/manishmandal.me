import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { emailContainerVariant, introTitleVariant } from '../../src/animations/landingSection';

const MyEmail = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // copy email
  const copyEmailHandler = async () => {
    if (navigator.clipboard) {
      setIsCopied(true);

      await navigator.clipboard.writeText('manishmandalj@gmail.com');
      setTimeout(() => {
        setIsCopied(false);
      }, 800);
    }
  };
  return (
    <>
      <motion.div
        className='relative group flex justify-center items-center mt-16 border-3 border-primary cursor-pointer rounded-md overflow-hidden border-collapse  shadow-primary  shadow-sm '
        onClick={copyEmailHandler}
        variants={emailContainerVariant}
        initial='initial'
        animate='animate'
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
    </>
  );
};

export default MyEmail;
