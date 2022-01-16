import Image from 'next/image';
import React from 'react';

// import logo from '/m-logo.svg';

const Header = () => {
  return (
    <nav className='h-20  overflow-hidden flex items-center justify-around py-8'>
      <Image src={'/m-logo.svg'} width={60} height={60} alt='manish-mandal' />
      <ul className='-mr-44 flex items-center justify-center h-full '>
        <a href='#' className='text-xl text-slate-700'>
          AboutMe
        </a>
        <a href='#' className='ml-5 text-xl text-slate-700'>
          Projects
        </a>
        <a href='#' className='ml-5 text-xl text-slate-700'>
          Resume
        </a>
      </ul>
      <button className='mr-28 flex items-center justify-center font-semibold text-primary border-2 border-primary py-2 px-6 rounded-full hover:bg-primary hover:text-gray-50 duration-200 transition-all'>
        Say Hello
      </button>
    </nav>
  );
};

export default Header;
