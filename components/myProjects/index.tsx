import React from 'react';

const MyProjects = () => {
  return (
    <div className='overflow-x-hidden'>
      <div
        className=' h-32 mt-20 w-full'
        style={{
          backgroundImage: 'url(/wave-bg.svg)',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      <div className='relative h-36  w-full '></div>
      <div className=' relative flex justify-around mt-0 py-10 h-96 px-16 overflow-hidden '></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dicta magnam labore assumenda nemo
        consequuntur asperiores ducimus adipisci facere odio, repudiandae ipsum dignissimos delectus in ea
        debitis enim quo a!
      </p>
    </div>
  );
};

export default MyProjects;
