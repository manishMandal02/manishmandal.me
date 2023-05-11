import React from 'react';
import MyEmail from '../landingSection/MyEmail';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import SocialLinks from '../UI/SocialLinks';

const ContactMe = () => {
  return (
    <>
      <Divider quoteNum={3} marginTop={20} marginBottom={16} marginTopMobile={10} marginBottomMobile={12} />
      <div className='mt-20  ms:mt-14 ms:-ml-1 -ml-2  w-full  mx-6 flex flex-col items-center justify-center overflow-hidden '>
        <SectionHeader header='Say hello 👋' />
        <div
          className='w-full flex flex-col items-center justify-center'
          data-aos='zoom-in-up'
          data-aos-duration='800'
          data-aos-mirror='true'
        >
          <p
            className='m-0 mt-5 ms:mt-3 font-semibold text-5xl ms:text-4xl text-slate-700 dark:text-gray-300 '
            id='contact'
          >
            Lets Get In Touch!
          </p>
          <div className='-mt-8'>
            <MyEmail customAnimation />
          </div>
          <p className='m-0 mt-8 ms:mt-4 ms:px-2  font-medium  text-lg ms:text-lg text-slate-700 dark:text-gray-400 text-center leading-snug'>
            You can stay in touch with me on &nbsp;
            <a
              href='https://twitter.com/manishMandalJ'
              target='_blank'
              rel='noreferrer'
              className='text-sky-500 appearance-none dark:text-sky-400'
            >
              Twitter
            </a>
            &nbsp; &
            <a
              href='https://www.linkedin.com/in/manish-mandal/'
              target='_blank'
              rel='noreferrer'
              className='text-blue-600 appearance-none dark:text-blue-400'
            >
              &nbsp; LinkedIn
            </a>
            , <br />I post most of my work on these platforms
          </p>
          <div className='mt-1 w-24'>
            <SocialLinks />
          </div>
          <p className='mt-14 mb-1  text-gray-600 dark:text-gray-500 opacity-75 tracking-wider text-sm'>
            Designed & Built by Manish Mandal
            {/* <span className='text-sm'> {new Date().getFullYear()}</span> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
