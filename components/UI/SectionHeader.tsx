import { motion, VariantLabels, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  header: string;
  variants?: Variants;
  lineVariants?: Variants;
}

const SectionHeader: React.FC<Props> = ({ variants, header, lineVariants }) => {
  return (
    <>
      <motion.div
        className='m-0 mt-0  flex items-center font-semibold text-primary text-xl tracking-wide relative'
        variants={variants}
        initial={variants ? 'initial' : ''}
        animate={variants ? 'animate' : ''}
      >
        <motion.span
          className=' font-extrabold -mt-5 font-mono  tracking-tighter mr-3'
          variants={lineVariants}
          initial={lineVariants ? 'initial' : ''}
          animate={lineVariants ? 'animate' : ''}
          // // animate={controls}
        >
          ____
        </motion.span>
        {header}
      </motion.div>
    </>
  );
};

export default SectionHeader;
