import React from 'react';
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Header from '../Header';
import MyEmail from '../landingSection/MyEmail';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';

const ContactMe = () => {
  return (
    <>
      <Divider />
      <div className='mt-16 w-full mx-6 flex flex-col items-center justify-center overflow-hidden '>
        <SectionHeader header='Say hello 👋' />
        <p className='m-0 mt-5 font-semibold text-5xl text-slate-700'>Lets Get In Touch!</p>
        <div className='-mt-8'>
          <MyEmail />
        </div>
        <p className='m-0 mt-8 font-medium text-lg text-slate-700 text-center leading-snug'>
          You can stay on touch with me on{' '}
          <a
            href='https://twitter.com/manishjmandal'
            target='_blank'
            rel='noreferrer'
            className='text-sky-500'
          >
            {' '}
            Twitter
          </a>{' '}
          &{' '}
          <a
            href='https://www.linkedin.com/in/manish-mandal/'
            target='_blank'
            rel='noreferrer'
            className='text-blue-600'
          >
            {' '}
            LinkedIn
          </a>
          , <br />I post most of my work on these platforms
        </p>
        <div className='flex items-center justify-around w-24 mt-4'>
          <a
            href='https://twitter.com/manishjmandal'
            target='_blank'
            rel='noreferrer'
            className='group hover:bg-sky-400  px-2 py-2  rounded-full transition-all duration-400'
          >
            <FaTwitter className='group-hover:text-white text-sky-400 text-2xl transition-all duration-300' />
          </a>
          <a
            href='https://www.linkedin.com/in/manish-mandal/'
            target='_blank'
            rel='noreferrer'
            className='group hover:bg-blue-500  px-2 py-2  rounded-full transition-all duration-400'
          >
            <FaLinkedinIn className='group-hover:text-white text-blue-500 text-2xl transition-all duration-300' />
          </a>
        </div>
        <p className='mt-12 mb-1 opacity-50 text-black tracking-wider text-base'>
          Designed & Built by Manish Mandal ©️
          <span className='text-sm'> {new Date().getFullYear()}</span>
        </p>
      </div>
    </>
  );
};

export default ContactMe;
