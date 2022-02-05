import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { emailContainerVariant, introTitleVariant } from '../../src/animations/landingSection';

interface Props {
  variants?: Variants;
  whileInView?: boolean;
}

const MyEmail: React.FC<Props> = ({ variants, whileInView }) => {
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
        className='w-98 relative group flex justify-between items-center mt-16 border-2 border-primary cursor-pointer rounded-md overflow-hidden border-collapse  shadow-primary  shadow-sm '
        onClick={copyEmailHandler}
        variants={variants ? undefined : emailContainerVariant}
        initial='initial'
        animate={!whileInView ? 'animate' : ''}
        whileInView={whileInView ? 'animate' : ''}
      >
        <div className=' w-0  group-hover:w-full flex transition-all duration-300 m-0 p-0 absolute  h-full  items-center tracking-wide justify-center border-5 rounded-sm border-primary  bg-primary z-10 opacity-90'>
          <p className='hidden  group-hover:block m-0 font-medium text-gray-50 text-base delay-200'>
            {isCopied ? 'Copied!' : 'Click to Copy'}
          </p>
        </div>
        <p className='m-0   border-r-3 border-primary  py-2 px-4 text-primary  outline-none text-3xl'>
          {/* &#9993; */}
          <FaEnvelope />
        </p>
        <div className='flex w-full items-center justify-center'>
          <p className='group-hover:text-lg transition-all duration-500   m-0 flex text-xl font-medium tracking-wide text-center justify-center text-slate-700 py-2 px-4 '>
            manishmandalj@gmail.com
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default MyEmail;
