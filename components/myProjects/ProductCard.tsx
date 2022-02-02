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
    <div key={id} className='w-80 py-2 px-3 ml-3 border-2 border-primary shadow-md rounded '>
      <p className='tex-2xl  text-slate-600 font-semibold text-center mt-2 tracking-wide'>{title}</p>
      <p className='text-sm text-slate-600 font-medium mt-2'>{subTitle}</p>
      <p className='text-xs font-medium text-slate-600 leading mt-3 mb-2'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus unde quae recusandae sapiente,
        enim aliquam maxime animi facere.
      </p>
      <div className='w-full flex flex-wrap -ml-2 mt-1'>
        {tech.map((tech, i) => (
          <span key={tech + i} className='m-0 leading-snug ml-2  rounded-full font-medium text-sm'>
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
