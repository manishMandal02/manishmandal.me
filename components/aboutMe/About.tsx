import { motion } from 'framer-motion';
// import {} from '../src/animations/landingSection';

const About = () => {
  return (
    <div>
      <motion.div
        className='m-0 mt-6 ml-6 flex items-center font-medium text-primary text-xl tracking-wide '
        //   variants={introNameVariant}
        //   initial='initial'
        //   animate='animate'
        // animate={controls}
      >
        <motion.span
          className=' font-extrabold -mt-5 font-mono  tracking-tighter'
          // variants={introNameLineVariant}
          // initial='initial's
          // // animate={controls}
          // animate='animate'
        >
          _____
        </motion.span>{' '}
        &nbsp; About me
      </motion.div>
      <p className='text-lg leading-7   text-gray-800 py-2 px-5 mt-4 border-l-3 border-primary border-opacity ml-6'>
        I am a self-thought developer from Bangalore, India <br />
        Experienced in using JavaScript and its ecosystem, <br />
        namely React & NodeJs to develop applications. <br />
        I have spent a significant amount of time developing and <br />
        nurturing my skills.
      </p>
    </div>
  );
};
export default About;
