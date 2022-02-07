import { motion } from 'framer-motion';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { inViewVariants } from '../../src/animations/landingSection';

interface Props {
  id: string;
  title: string;
  subTitle: string;
  github?: string;
  link: string;
  desc: string;
  tags: string[];
  tech: string[];
}

const ProductCard: React.FC<Props> = ({ id, title, subTitle, tech, github, link, desc }) => {
  return (
    <motion.div
      className='w-80 mt-4 ms:w-full py-3 px-3 ml-3 border-2 border-cyan-400 shadow-sm rounded  transition-all duration-200 overflow-hidden'
      key={id}
      variants={inViewVariants}
      viewport={{ once: true }}
      initial='initial'
      whileInView='animate'
      // whileHover={{
      //   y: -5,
      //   transition: {
      //     duration: 0.09,
      //     // type: 'spring',
      //     // stiffness: 125,
      //   },
      // }}
    >
      <p className='m-0 text-xl text-slate-700 font-semibold text-center mt-1 tracking-wide'>{title}</p>
      <p className='text-base  text-slate-700 font-medium mt-1'>{subTitle}</p>
      <p className='text-sm  text-slate-600 font-medium leading mt-3 mb-2'>{desc}</p>
      <div className='w-full flex flex-wrap -ml-2 mt-4 -mb-2'>
        {tech.map((tech, i) => (
          <span key={tech + i} className='m-0 -mt-px leading-snug font-medium ml-2 opacity-80 text-sm'>
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-end items-center mt-1 text-slate-600 overflow-hidden'>
        {github && (
          <a
            href={github && github}
            target='_blank'
            rel='noreferrer'
            className='text-xl cursor-pointer mr-3 ms:mr-4 hover:text-slate-900'
          >
            <FaGithub className='' />
          </a>
        )}
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='cursor-pointer mr-1 text-lg hover:text-slate-900'
        >
          <FaExternalLinkAlt className='' />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
