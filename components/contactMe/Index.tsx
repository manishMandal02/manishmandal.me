import React from 'react';
import MyEmail from '../landingSection/MyEmail';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import SocialLinks from '../UI/SocialLinks';

const ContactMe = () => {
  return (
    <>
      <Divider />
      <div className='mt-16 ms:mt-14 ms:-ml-1 w-full mx-6 flex flex-col items-center justify-center overflow-hidden '>
        <SectionHeader header='Say hello 👋' />
        <p className='m-0 mt-5 ms:mt-3 font-semibold text-5xl ms:text-4xl text-slate-700' id='contact'>
          Lets Get In Touch!
        </p>
        <div className='-mt-8'>
          <MyEmail />
        </div>
        <p className='m-0 mt-8 ms:mt-4 ms:px-2  font-medium  text-lg ms:text-lg text-slate-700 text-center leading-snug'>
          You can stay in touch with me on &nbsp;
          <a href='https://twitter.com/onemandal' target='_blank' rel='noreferrer' className='text-sky-500'>
            Twitter
          </a>
          &nbsp; &
          <a
            href='https://www.linkedin.com/in/manish-mandal/'
            target='_blank'
            rel='noreferrer'
            className='text-blue-600'
          >
            &nbsp; LinkedIn
          </a>
          , <br />I post most of my work on these platforms
        </p>
        <div className='mt-1 w-24'>
          <SocialLinks />
        </div>
        <p className='mt-12 mb-1  text-gray-600 opacity-80 tracking-wider text-base'>
          Designed & Built by Manish Mandal
          {/* <span className='text-sm'> {new Date().getFullYear()}</span> */}
        </p>
      </div>
    </>
  );
};

export default ContactMe;
