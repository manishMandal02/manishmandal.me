import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Props {
  id: string;
  title: string;
  subTitle: string;
  github?: string;
  link: string;
  tags: string[];
  tech: string[];
}

const ProductCard: React.FC<Props> = ({ id, title, subTitle, tags, tech, github, link }) => {
  return (
    <div key={id} className='w-80 py-3 px-3 ml-3 border-2 border-primary shadow-md rounded '>
      <p className='m-0 tex-2xl  text-slate-600 font-semibold text-center mt-2 tracking-wide'>{title}</p>
      <p className='text-sm text-slate-600 font-medium mt-2'>{subTitle}</p>
      <p className='text-sm  text-slate-600 font-medium leading mt-3 mb-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus unde quae recusandae sapiente.
      </p>
      <div className='w-full flex flex-wrap -ml-2 mt-4 -mb-2'>
        {tech.map((tech, i) => (
          <span key={tech + i} className='m-0 -mt-px leading-snug font-medium ml-2 opacity-80 text-sm'>
            {tech}
          </span>
        ))}
      </div>
      <div className='flex justify-end items-center text-slate-600'>
        {github && (
          <a href={github && github}>
            <FaGithub className='text-lg cursor-pointer mr-3 hover:' />
          </a>
        )}
        <a href={link}>
          <FaExternalLinkAlt className=' cursor-pointer hover:' />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
