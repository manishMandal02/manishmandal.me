import { motion, VariantLabels, Variants } from 'framer-motion';
import React from 'react';

interface Props {
  header: string;
  variants?: Variants;
  lineVariants?: Variants;
  whileInView?: boolean;
}

const SectionHeader: React.FC<Props> = ({ variants, header, lineVariants, whileInView }) => {
  return (
    <>
      <motion.div
        className='m-0 mt-0  flex items-center font-semibold text-primary text-xl tracking-wide relative'
        variants={variants}
        initial={variants ? 'initial' : ''}
        animate={variants && !whileInView ? 'animate' : ''}
        whileInView={whileInView ? 'animate' : ''}
      >
        <motion.span
          className=' font-extrabold -mt-5 font-mono  tracking-tighter mr-2'
          variants={lineVariants}
          initial={lineVariants ? 'initial' : ''}
          animate={lineVariants ? 'animate' : ''}
        >
          ____
        </motion.span>
        {header}
      </motion.div>
    </>
  );
};

export default SectionHeader;
