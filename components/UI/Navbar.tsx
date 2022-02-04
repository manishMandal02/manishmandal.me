import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLinks';

// import logo from '/m-logo.svg';

const Navbar = () => {
  return (
    <nav className='h-20  overflow-hidden flex items-center justify-around py-8 pt-10 absolute top-0 w-full z-10 bg-white'>
      <Link href={'/'}>
        <Image src={'/m-logo.svg'} className='cursor-pointer' width={60} height={60} alt='manish-mandal' />
      </Link>
      <div className='-mr-44 flex items-center justify-center overflow-hidden'>
        <Link href='/hi'>
          <p className='text-lg  text-slate-600 hover:text-black cursor-pointer'>AboutMe</p>
        </Link>
        <Link href='#'>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Projects</p>
        </Link>
        <Link href='#'>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Resume</p>
        </Link>
      </div>
      {/* <button className='mr-28 flex items-center justify-center font-medium text-primary border-2 border-primary py-2 px-6 rounded-full hover:bg-primary hover:text-gray-50 duration-300 transition-all'>
        Say Hello
      </button> */}
      <div className='w-24'>
        <SocialLinks github />
      </div>
    </nav>
  );
};

export default Navbar;
