import React, { useState } from 'react';

import ProductCard from './ProjectCard';
import allProjectsData from '../../src/assets/data/allProjects.json';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';
import { nanoid } from 'nanoid';

const Projects = () => {
  // Showing limited number of projects with view more btn
  const [isViewMore, setIsViewMore] = useState<boolean>(false);

  const Arrow = isViewMore ? FaChevronUp : FaChevronDown;
  return (
    <>
      <div className='flex flex-wrap  items-center justify-start -ml-4 w-2/3 ms:w-4/5'>
        {allProjectsData.map((data, i) => {
          if (!isViewMore ? i <= 2 : i <= 5) {
            return <ProductCard id={nanoid()} {...data} />;
          }
        })}
      </div>
      {allProjectsData.length > 3 && (
        <button
          onClick={() => {
            setIsViewMore((prev) => !prev);
          }}
          className='group mt-8 flex items-center text-lg text-slate-900 dark:text-gray-400 font-medium'
        >
          {isViewMore ? 'View Less' : 'View More'}
          <Arrow
            className={`text-base ml-2 ${
              isViewMore ? 'group-hover:-translate-y-px' : 'group-hover:translate-y-px'
            } transition-all duration-200 `}
          />
        </button>
      )}
      {isViewMore && (
        <a
          href='https://github.com/manishMandal02'
          target='_blank'
          rel='noreferrer'
          className='flex items-center justify-center mt-2 hover:underline transition-all duration-400 dark:text-gray-400 '
        >
          View all my projects on Github{' '}
          <FaExternalLinkAlt className='text-sm ml-1 text-slate-600 dark:text-gray-400' />
        </a>
      )}
    </>
  );
};

export default Projects;
