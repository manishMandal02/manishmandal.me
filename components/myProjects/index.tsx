import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';
import { nanoid } from 'nanoid';
import featuredProjectsData from '../../src/assets/data/featuredProject.json';
import allProjectsData from '../../src/assets/data/allProjects.json';
import ProductCard from './ProductCard';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import { motion } from 'framer-motion';
import { inViewVariants } from '../../src/animations/landingSection';

const MyProjects = () => {
  return (
    <div className='overflow-hidden w-full mb-16'>
      <Divider />
      <div className='mt-24 ms:mt-14 flex flex-col '>
        <div className='ml-18 ms:ml-3'>
          <SectionHeader header='Projects' whileInView variants={inViewVariants} />
          <motion.p
            className='text-slate-700 text-4xl ms:text-2xl font-semibold ml-12 mt-1 ms:mt-0'
            variants={inViewVariants}
            initial='initial'
            whileInView='animate'
          >
            Some Things I've Built.
          </motion.p>
        </div>
        <div className=' -mt-8 ms:-mt-4 flex flex-col w-full items-center justify-center'>
          {featuredProjectsData.map((data, i) => (
            <FeaturedProductCard id={nanoid()} {...data} isFlipped={i % 2 !== 0} />
          ))}
          <div className='mt-16 ms:mt-10 w-full flex flex-col items-center justify-center'>
            <div className='relative'>
              <p className='text-xl font-medium text-slate-600 mb-4 ms:mb-2'>Other Projects 👇</p>
            </div>
            <div className='flex flex-wrap  items-center justify-center w-2/3 ms:w-4/5'>
              {allProjectsData.map((data, i) => (
                <ProductCard id={nanoid()} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
