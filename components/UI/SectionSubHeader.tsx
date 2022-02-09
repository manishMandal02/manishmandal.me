import React from 'react';

interface Props {
  title: string;
}

const SectionSubHeader: React.FC<Props> = ({ title }) => {
  return (
    <p
      className='text-slate-700 text-4xl ms:text-2xl font-semibold ml-12 mt-1 ms:mt-0'
      id='projects'
      data-aos='fade-up'
      data-aos-duration='400'
      data-aos-delay='200'
      data-aos-mirror='true'
    >
      {title}
    </p>
  );
};

export default SectionSubHeader;
