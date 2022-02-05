import React from 'react';
import { AnimationControls, motion } from 'framer-motion';
import { subTitleVariant } from '../../src/animations/landingSection';

interface Props {
  controls: AnimationControls;
}

const Subtitle: React.FC<Props> = ({ controls }) => {
  const mainSkills = ['🎨 Design', '👨‍💻 Develop', '💹 Market'];

  return (
    <>
      <motion.div className='flex -ml-3 mt-14 ms:mt-6 text-3xl ms:text-xl font-semibold text-slate-600 mb-2'>
        {mainSkills.map((skill, i) => (
          <motion.h2
            key={skill + '-' + i}
            className='m-0 ml-3'
            variants={subTitleVariant}
            custom={i}
            initial='initial'
            animate={controls}
          >
            {skill}
            <span className='text-3xl'>.</span>
          </motion.h2>
        ))}
      </motion.div>
    </>
  );
};

export default Subtitle;
