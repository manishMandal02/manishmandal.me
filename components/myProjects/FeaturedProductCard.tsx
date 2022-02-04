import { motion } from 'framer-motion';
import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { inViewVariants } from '../../src/animations/landingSection';

interface Props {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  github?: string;
  link: string;
  tags: string[];
  tech: string[];
  isFlipped?: boolean;
}

const FeaturedProductCard: React.FC<Props> = ({
  title,
  subTitle,
  github,
  link,
  tags,
  tech,
  isFlipped,
  image,
  id,
}) => {
  return (
    <motion.div
      className={`h-80 w-100 flex ${isFlipped ? 'flex-row-reverse' : ''} mt-20 ${
        isFlipped ? '-ml-16' : '-mr-16'
      }`}
      key={id}
      variants={inViewVariants}
      initial='initial'
      whileInView='animate'
    >
      <div className='w-3/6 bg-emerald-300 rounded-lg'>
        <img src={image} alt={title} className='w-full' />
      </div>
      <div
        className={`w-1/2 flex  ${isFlipped ? 'items-start' : 'items-end'} justify-center flex-col pr-4 ${
          isFlipped ? '-mr-12' : '-ml-12'
        }`}
      >
        <p className='text-slate-700 font-semibold text-2xl tracking-wide'>{title}</p>
        <p className='text-gray-600 font-medium text-lg tracing-wide'>{subTitle}</p>
        <div className='w-full flex-wrap mt-5 flex items-center justify-center bg-slate-600 text-gray-50 py-2 pb-5 px-2 pl-0 rounded my-8 shadow-sm '>
          {tags.map((tag, i) => (
            <span
              key={tag + i}
              className='ml-3 border-2 shadow-lg border-slate-200 border-opacity-70  mt-4 py-1 px-3 rounded-full text-xs'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='-mt-4 mb-4 -ml-3'>
          {tech.map((tech, i) => (
            <span key={tech + i} className='ml-3 mt-4 rounded-full font-medium text-sm'>
              {tech}
            </span>
          ))}
        </div>
        <div className='flex w-14  item-center justify-between text-2xl text-slate-600'>
          {github && <FaGithub className='text-xl cursor-pointer hover:' />}
          <FaExternalLinkAlt className='text-lg cursor-pointer hover:' />
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProductCard;
