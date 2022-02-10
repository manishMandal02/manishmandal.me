import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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
    <div
      className={`h-72 ms:h-full w-100 ms:w-full flex ${
        isFlipped ? 'flex-row-reverse' : ''
      } ms:flex-col mt-20 ms:mt-12 ${isFlipped ? '-ml-16' : '-mr-16'} ms:ml-0 ms:mr-0 ms:px-2`}
      key={id}
      data-aos={isFlipped ? 'fade-left' : 'fade-right'}
      data-aos-duration='500'
      data-aos-delay='100'
      data-aos-mirror='true'
      data-aos-anchor-placement='top-bottom'
    >
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='w-3/6 max-w-3/6  ms:w-full bg-emerald-300 dark:bg-primaryDarkBG rounded-lg  group'
      >
        <Image
          src={image}
          alt={title}
          width={520}
          height={295}
          className='w-full group-hover:opacity-90 dark:opacity-90  dark:group-hover:opacity-80 transition-all duration-200'
        />
      </a>
      <div
        className={`w-1/2 ms:w-full flex  ${
          isFlipped ? 'items-start' : 'items-end'
        } justify-center flex-col pr-4 ${
          isFlipped ? '-mr-12' : '-ml-12'
        } ms:items-start ms:mr-0 ms:ml-0 ms:mt-2 ms:px-3 ms:relative`}
      >
        <p className='text-slate-700 dark:text-gray-300 font-semibold text-2xl tracking-wide'>{title}</p>
        <p className='text-gray-600 dark:text-gray-400 font-medium text-lg ms:text-base tracing-wide'>
          {subTitle}
        </p>
        <div className='w-full flex-wrap mt-5 ms:mt-2 flex items-center justify-center  z-10 bg-slate-600 dark:bg-slate-800 text-gray-50 dark:text-gray-400 py-2 pb-5 ms:pb-4 px-2 ms:px-0 pl-0 rounded my-8 ms:my-0 shadow-sm '>
          {tags.map((tag, i) => (
            <span
              key={tag + i}
              className='ml-3 ms:ml-2 border-2 shadow-lg border-slate-200 dark:border-slate-600 border-opacity-70  mt-4 ms:mt-2 py-1 px-3 ms:px-2 rounded-full text-xs'
            >
              {tag}
            </span>
          ))}
        </div>
        <div className='w-full flex items-center justify-center dark:text-gray-400  flex-wrap -mt-4 ms:mt-2 mb-4 ms:mb-2 -ml-3 ms:-ml-0'>
          {tech.map((tech, i) => (
            <span key={tech + i} className='ml-3 mt-0 rounded-full font-medium dark:font-semibold text-sm'>
              {tech}
            </span>
          ))}
        </div>
        <div className='flex w-14 ms:w-16 ms:self-center item-center justify-between text-lg  ms:text-xl top-0 text-slate-600 dark:text-gray-400'>
          {github && (
            <a
              href={github && github}
              target='_blank'
              rel='noreferrer'
              className='group text-xl ms:text-2xl cursor-pointer mr-3 hover:text-slate-900 dark:hover:text-gray-400'
            >
              <FaGithub className='group-hover:scale-110 transition-all duration-300 ' />
            </a>
          )}
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='group cursor-pointer mr-1 hover:text-slate-900 dark:hover:text-gray-400 ms:mt-px'
          >
            <FaExternalLinkAlt className='group-hover:scale-110 transition-all duration-300' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
