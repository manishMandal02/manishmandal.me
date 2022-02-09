import { motion } from 'framer-motion';
import React from 'react';
import { inViewVariants } from '../../src/animations/landingSection';
import Divider from '../UI/Divider';
import SectionHeader from '../UI/SectionHeader';
import SectionSubHeader from '../UI/SectionSubHeader';
import Blogs from './Blogs';

const Blog = () => {
  return (
    <div>
      <Divider />
      <div className='ml-18 ms:ml-3 mt-16 mb-10'>
        <SectionHeader header='Blog' whileInView variants={inViewVariants} />
        <SectionSubHeader title='My Latest Blog Posts.' />
        {/* Blogs */}
        <div className='w-full px-32 mt-12 flex items-center justify-center'>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Blog;
