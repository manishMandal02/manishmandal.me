import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

interface Props {
  github?: boolean;
}

const SocialLinks: React.FC<Props> = ({ github }) => {
  return (
    <div className='flex items-center justify-around w-full'>
      <a
        href='https://twitter.com/manishMandalJ'
        target='_blank'
        rel='noreferrer'
        className='group hover:bg-sky-400  px-2 py-2  rounded-full transition-all duration-400'
      >
        <FaTwitter className='group-hover:text-white text-sky-400 text-2xl transition-all duration-300' />
      </a>
      <a
        href='https://www.linkedin.com/in/manish-mandal'
        target='_blank'
        rel='noreferrer'
        className='group hover:bg-blue-500  px-2 py-2 ml-2   rounded-full transition-all duration-400'
      >
        <FaLinkedinIn className='group-hover:text-white text-blue-500 text-2xl transition-all duration-300' />
      </a>
      {github && (
        <a
          href='https://github.com/manishMandal02'
          target='_blank'
          rel='noreferrer'
          className='group hover:bg-slate-700 dark:hover:bg-slate-500  px-2 py-2 ml-2  rounded-full transition-all duration-400'
        >
          <FaGithub className='group-hover:text-white text-slate-700 dark:text-white  text-2xl transition-all duration-300' />
        </a>
      )}
    </div>
  );
};

export default SocialLinks;
