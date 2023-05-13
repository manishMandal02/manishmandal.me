import { motion } from 'framer-motion';
import React from 'react';
import SectionHeader from '../UI/SectionHeader';
import SectionSubHeader from '../UI/SectionSubHeader';
import Blogs from './Blogs';
import Divider from '../UI/Divider';

const Blog = () => {
  return (
    <div>
      <div className='overflow-hidden w-full mb-6'>
        <Divider quoteNum={3} marginTop={24} marginBottom={20} marginTopMobile={28} marginBottomMobile={28} />
        <div className='ml-18 ms:ml-px mt-16 mb-10'>
          <SectionHeader header='Blog' />
          <SectionSubHeader title='My Latest Blog Posts' />
          {/* Blogs */}
          <div className='w-full px-32 mt-12 flex items-center justify-center'>
            <Blogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
