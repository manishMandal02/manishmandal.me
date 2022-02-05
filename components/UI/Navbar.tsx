import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialLinks from './SocialLinks';

// import logo from '/m-logo.svg';

const Navbar = () => {
  return (
    <nav className='h-20 ms:h-28 overflow-hidden ms:px-0 ms:pt-0   px-28 py-8 pt-10 absolute top-0 w-full z-10 bg-white'>
      <div className='ms:hidden h-full flex items-center justify-around'>
        <Link href={'/'}>
          <Image src={'/m-logo.svg'} className='cursor-pointer' width={60} height={60} alt='manish-mandal' />
        </Link>
        <div className='flex items-center justify-center overflow-hidden'>
          <p className='text-lg  text-slate-600 hover:text-black cursor-pointer'>AboutMe</p>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Projects</p>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Resume</p>
        </div>
        <div className='w-24 mr-'>
          <SocialLinks github />
        </div>
      </div>
      <div className='hidden ms:flex h-full flex-col'>
        <div className='flex h-full justify-between items-center shadow-sm w-full px-4'>
          <Link href={'/'}>
            <Image
              src={'/m-logo.svg'}
              className='cursor-pointer'
              width={45}
              height={45}
              alt='manish-mandal'
            />
          </Link>
          <div className='w-28 mr-2'>
            <SocialLinks github />
          </div>
        </div>
        <div className='w-full flex items-center justify-center overflow-hidden  -mb-2 mt-2'>
          <p className='text-lg  text-slate-600 hover:text-black cursor-pointer'>AboutMe</p>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Projects</p>
          <p className=' cursor-pointer ml-5 text-xl hover:text-black    text-slate-600'>Resume</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
