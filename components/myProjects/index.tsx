import React from 'react';
import FeaturedProductCard from './FeaturedProductCard';

import projectData from '../../src/assets/projectData.json';
import ProductCard from './ProductCard';

const MyProjects = () => {
  return (
    <div className='overflow-x-hidden w-full'>
      <div
        className=' h-28 mt-20'
        style={{
          backgroundImage: 'url(/wave-bg.svg)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      <div className=''>
        <div className='mt-12 py-10  flex flex-col w-full items-center justify-center '>
          {projectData.map((data, i) => (
            <FeaturedProductCard id={data.title + i + ''} {...data} isFlipped={i % 2 !== 0} />
          ))}
          <div className='mt-16 w-full flex flex-col items-center justify-center'>
            <p className='text-xl font-medium text-slate-700 mb-8'>Other Projects 👇</p>
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
