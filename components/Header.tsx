import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// import logo from '/m-logo.svg';

const Header = () => {
  return (
    <nav className='h-20  overflow-hidden flex items-center justify-around py-8'>
      <Link href={'/'}>
        <Image src={'/m-logo.svg'} className='cursor-pointer' width={60} height={60} alt='manish-mandal' />
      </Link>
      <ul className='-mr-44 flex items-center justify-center h-full '>
        <a href='#' className='text-xl  text-slate-700'>
          AboutMe
        </a>
        <a href='#' className='ml-5 text-xl  text-slate-700'>
          Projects
        </a>
        <a href='#' className='ml-5 text-xl  text-slate-700'>
          Resume
        </a>
      </ul>
      <button className='mr-28 flex items-center justify-center font-medium text-primary border-2 border-primary py-2 px-6 rounded-full hover:bg-primary hover:text-gray-50 duration-300 transition-all'>
        Say Hello
      </button>
    </nav>
  );
};

export default Header;
