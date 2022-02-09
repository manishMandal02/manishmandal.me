import React, { useState } from 'react';
import FeaturedProductCard from './FeaturedProjectCard';
import { nanoid } from 'nanoid';
import featuredProjectsData from '../../src/assets/data/featuredProject.json';

import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import { motion } from 'framer-motion';
import SectionSubHeader from '../UI/SectionSubHeader';
import Projects from './Projects';

const MyProjects = () => {
  return (
    <div className='overflow-hidden w-full mb-6'>
      <Divider />
      <div className='mt-24 ms:mt-14 flex flex-col '>
        <div className='ml-18 ms:ml-3' id='projects'>
          <SectionHeader header='Projects' />
          <SectionSubHeader title="Some Things I've Built." />
        </div>
        <div className=' -mt-8 ms:-mt-4 flex flex-col w-full items-center justify-center'>
          {featuredProjectsData.map((data, i) => (
            <FeaturedProductCard id={nanoid()} {...data} isFlipped={i % 2 !== 0} />
          ))}
          <div className='mt-16 ms:mt-10 w-full flex flex-col items-center justify-center'>
            <div className='relative'>
              <p
                className='text-xl font-medium text-slate-600 mb-4 ms:mb-2'
                data-aos='zoom-in-up'
                data-aos-duration='500'
                data-aos-mirror='true'
              >
                Other Projects 👇
              </p>
            </div>
            {/*  */}
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
