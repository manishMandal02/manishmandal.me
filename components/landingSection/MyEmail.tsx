import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { FaCopy, FaEnvelope } from 'react-icons/fa';
import { emailContainerVariant, introTitleVariant } from '../../src/animations/landingSection';

interface Props {
  customAnimation?: boolean;
}

const MyEmail: React.FC<Props> = ({ customAnimation }) => {
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
        className='w-98 mb-2 ms:w-84 relative group flex justify-between items-center mt-16 ms:mt-12 border-2 border-primary dark:border-primary-dark  cursor-pointer rounded-md overflow-hidden border-collapse  shadow-primary  shadow-sm '
        onClick={copyEmailHandler}
        variants={customAnimation ? undefined : emailContainerVariant}
        initial='initial'
        animate='animate'
      >
        <div className='ms:hidden w-0  group-hover:w-full flex transition-all duration-300 m-0 p-0 absolute  h-full  items-center tracking-wide justify-center border-5 rounded-sm border-primary dark:border-primary-dark   bg-primary dark:bg-primary-dark z-10 opacity-90'>
          <p className='hidden  group-hover:block m-0 font-medium text-gray-50 text-base delay-200'>
            {isCopied ? 'Copied!' : 'Click to Copy'}
          </p>
        </div>
        <p className='ms:hidden m-0  border-r-3 border-primary dark:border-primary-dark   py-2 px-4 text-primary dark:text-primary-dark  outline-none text-3xl'>
          {/* &#9993; */}
          <FaEnvelope />
        </p>
        <div className='hidden ms:block'>
          {!isCopied ? (
            <p className='m-0  border-r-3 border-primary dark:border-primary-dark   py-2 px-4 text-primary dark:text-primary-dark  outline-none text-3xl'>
              {/* &#9993; */}
              <FaEnvelope />
            </p>
          ) : (
            <p className='m-0  border-r-3 border-primary dark:border-primary-dark   py-2 px-4 text-primary dark:text-primary-dark  outline-none text-3xl'>
              {/* &#9993; */}
              <FaCopy />
            </p>
          )}
        </div>
        <div className='flex w-full items-center justify-center '>
          <p className='group-hover:text-lg ms:group-hover:text-  transition-all duration-400   m-0 flex text-xl ms:text-lg font-medium tracking-wide text-center justify-center text-slate-700 dark:text-gray-300 py-2 px-4 ms:px-2 '>
            manishmandalj@gmail.com
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default MyEmail;
