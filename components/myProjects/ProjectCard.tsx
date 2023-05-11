import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Props {
  title: string;
  github?: string;
  link?: string;
  desc: string;
  tech: string[];
}

const ProjectCard: React.FC<Props> = ({ title, tech, github, link, desc }) => {
  return (
    <div
      className='w-80 mt-4 h-60 ms:h-60 ms:w-full flex flex-col justify-between py-3 px-4  ml-4 border-2 border-primary shadow-sm rounded  transition-all duration-200 overflow-hidden'
      data-aos='fade-up'
      data-aos-duration='500'
      // data-aos-delay='150'
      data-aos-mirror='true'
    >
      <p className='m-0 text-xl text-slate-700 dark:text-gray-300 font-semibold text-center mt-1 tracking-wide'>
        {title}
      </p>
      <p className='text-base leading-snug mt-3 text-slate-700 dark:text-gray-400 font- leading'>{desc}</p>
      <div className='w-full self-center flex flex-wrap -ml-2 mt-4 dark:text-gray-300 -mb-2'>
        {tech.map((tech, i) => (
          <span
            key={tech + i}
            className='m-0 -mt-px leading-snug font-medium ml-2 ms:ml-1 opacity-80 text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-end items-center mt-4 text-slate-600 dark:text-gray-300 dark:opacity-90 overflow-hidden'>
        {github && (
          <a
            href={github && github}
            target='_blank'
            rel='noreferrer'
            className='text-xl cursor-pointer mr-3 ms:mr-4 hover:text-slate-900 dark:hover:text-gray-400'
          >
            <FaGithub className='' />
          </a>
        )}
        {link && (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='cursor-pointer mr-1 text-lg hover:text-slate-900 dark:hover:text-gray-400'
          >
            <FaExternalLinkAlt className='' />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
