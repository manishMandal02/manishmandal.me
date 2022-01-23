import { motion } from 'framer-motion';
// import {} from '../src/animations/landingSection';

const About = () => {
  return (
    <div className='ml-20'>
      <motion.div
        className='m-0 mt-0  flex items-center font-medium text-primary text-xl tracking-wide '
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
      <p className=' text-lg leading-7 font-medium  text-gray-900 py-6 px-6 mt-8 border-2 border-primary border-opacity-20 rounded-xl shadowPlane2'>
        I am a self-thought developer from Bangalore, India. <br />
        Experienced in using JavaScript and its ecosystem, namely
        <br />
        React & NodeJs to develop applications. <br />
        <br />
        I have spent a significant amount of time developing and
        <br />
        and nurturing my skills and always looking for opportunities <br />
        to apply them
      </p>
    </div>
  );
};
export default About;
