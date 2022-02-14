import { motion } from 'framer-motion';
import NewLine from '../UI/NewLine';
import SectionHeader from '../UI/SectionHeader';
import Spacing from '../UI/Spacing';

const About = () => {
  const space = <span className='mr-1'></span>;
  // const spaceMS = <span className='hidden ms:block mr-1'></span>;
  const newLine = (
    <span className='ms:hidden'>
      <br />
    </span>
  );

  return (
    <div className='ml-20 ms:w-full ms:-ml-1 ms:mt-14'>
      <SectionHeader header='About me' />
      <p
        className=' m-0 text-xl ms:text-lg font-medium text-slate-700 dark:text-gray-300 tracking-normal mt-8 ms:mt-3'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-delay='100'
        data-aos-mirror='true'
      >
        🤵 Manish Mandal &nbsp; {space} 📌 Bangalore, India
      </p>
      <h2
        className='text-xl ms:text-base font-semibold text-slate-700  dark:text-gray-300 tracking-wide mt-5 ms:mt-3 '
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-mirror='true'
      >
        <span className='text-xl'>👉 </span>I help people turn ideas into functional and interactive{' '}
        <NewLine />
        <Spacing two /> <Spacing /> products.
      </h2>
      {/* divider */}
      <div
        className='w-1 h-44 ms:h-56 bottom-0 ms:-bottom-0  absolute bg-gradient-to-b from-cyan-500 to-blue-400 '
        data-aos='fade-up'
        data-aos-duration='600'
        data-aos-delay='300'
        data-aos-mirror='true'
      ></div>
      <h3
        className=' text-base leading-6 font-medium  text-gray-700 dark:text-gray-300  pt-2 pb-3 px-2 mt-5 ml-2'
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-mirror='true'
      >
        Self-thought web developer Experienced in using{' '}
        <span className='bg-yellow-300 px-1 dark:text-gray-900 rounded-sm'> JavaScript </span> {space}
        {newLine}
        and its ecosystem, namely{' '}
        <span className='bg-cyan-300 px-1 dark:text-gray-900 rounded-sm'> React</span> &{' '}
        <span className='bg-green-300 px-1 dark:text-gray-900 rounded-sm'> NodeJs</span> to develop <br /> web
        applications. <br />
        <p className='mt-1'>
          I have spent a significant amount of time developing and {space}
          {newLine}
          nurturing my skills and always looking for opportunities <br />
          to apply them.
        </p>
      </h3>
    </div>
  );
};
export default About;
