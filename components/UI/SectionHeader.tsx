import React from 'react';
import { inViewAOSAnimations } from '../../src/animations/landingSection';

interface Props {
  header: string;

  whileInView?: boolean;
}

const SectionHeader: React.FC<Props> = ({ header }) => {
  return (
    <>
      <div
        className='m-0 mt-0  flex items-center font-semibold text-primary dark:text-primary-dark text-xl tracking-wide relative'
        data-aos='fade-right'
        data-aos-duration='500'
        data-aos-mirror='true'
      >
        <span
          className=' font-extrabold -mt-5 font-mono  tracking-tighter mr-2'
          data-aos='slide-right'
          data-aos-delay='100'
          data-aos-mirror='true'
        >
          ____
        </span>
        {header}
      </div>
    </>
  );
};

export default SectionHeader;
