import React from 'react';
import { AnimationControls, motion } from 'framer-motion';
import { subTitleVariant } from '../../src/animations/landingSection';

interface Props {
  controls: AnimationControls;
}

const Subtitle: React.FC<Props> = ({ controls }) => {
  const mainSkills = ['🎨Design', '👨‍💻Develop', '💹Market'];

  return (
    <>
      <motion.div className='flex mt-12 text-3xl font-semibold text-slate-700 mb-2'>
        {mainSkills.map((skill, i) => (
          <motion.p
            key={skill + '-' + i}
            className=''
            variants={subTitleVariant}
            custom={i}
            initial='initial'
            animate={controls}
          >
            {skill}
            <span className='text-4xl'>.</span>
          </motion.p>
        ))}
      </motion.div>
    </>
  );
};

export default Subtitle;
