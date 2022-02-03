import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

import projectData from '../../src/assets/projectData.json';
import ProductCard from './ProductCard';
import Divider from '../UI/Divider';

const MyProjects = () => {
  return (
    <div className='overflow-x-hidden w-full'>
      <Divider />
      <div className=''>
        <div className='mt-12 py-10  flex flex-col w-full items-center justify-center '>
          {projectData.map((data, i) => (
            <FeaturedProductCard id={data.title + i + ''} {...data} isFlipped={i % 2 !== 0} />
          ))}
          <div className='mt-16 w-full flex flex-col items-center justify-center'>
            <div className='relative'>
              <p className='text-xl font-medium text-slate-600 mb-7'>Other Projects 👇</p>
            </div>
            <div className='flex flex-wrap  items-center justify-center w-2/3'>
              {projectData.map((data, i) => (
                <ProductCard id={data.title + i + ''} {...data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
