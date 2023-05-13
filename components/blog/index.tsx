import { motion } from 'framer-motion';
import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import SectionSubHeader from '../UI/SectionSubHeader';
import Blogs from './Blogs';

const Blog = () => {
  return (
    <div>
      <div className='ml-18 ms:ml-3 mt-16 mb-10'>
        <SectionHeader header='Blog' />
        <SectionSubHeader title='My Latest Blog Posts' />
        {/* Blogs */}
        <div className='w-full px-32 mt-12 flex items-center justify-center'>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Blog;
