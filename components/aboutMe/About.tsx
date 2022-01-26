import { motion } from 'framer-motion';
// import {} from '../src/animations/landingSection';

const About = () => {
  return (
    <div className='ml-20'>
      <motion.div
        className='m-0 mt-0  flex items-center font-semibold text-primary text-xl tracking-wide '
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
      <p className=' m-0 text-xl font-medium text-slate-700 tracking-normal mt-6 lead'>
        🤵 Manish Mandal &nbsp; &nbsp; 📌 Bangalore, India
      </p>
      <h2 className='text-xl font-semibold text-slate-700  tracking-wide mt-5 '>
        <span className='text-xl'>👉 </span>I help people turn ideas into functional and interactive <br />{' '}
        &nbsp; &nbsp; &nbsp; products.
      </h2>
      <p className=' text-base leading-6 font-medium  text-gray-700  pt-2 pb-3 px-4 mt-5 ml-2 border-l-3 border-primary border-opacity-80'>
        Self-thought developer Experienced in using JavaScript
        <br />
        and its ecosystem, namely React & NodeJs to develop <br /> applications. <br />
        <p className='mt-1'>
          I have spent a significant amount of time developing and
          <br />
          and nurturing my skills and always looking for opportunities <br />
          to apply them
        </p>
      </p>
    </div>
  );
};
export default About;
