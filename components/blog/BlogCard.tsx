import Image from 'next/image';
import React from 'react';
import { BlogPost } from '../../src/types/blog.type';

const BlogCard = ({ title, slug, coverImage, dateAdded }: BlogPost) => {
  return (
    <div className='flex flex-col  max-w-99 '>
      <div className={`rounded-sm   h-72  w-99 flex relative bg-gray-400 m-0 mr-10 px-6 py-8 `}>
        <a href={`https:blog.manishmandal.me/${slug} `} target='_blank'>
          <Image src={coverImage} alt={title} className='' fetchPriority='auto' fill />
        </a>
      </div>
      <p className='w-99 mt-2 text-slate-100   font-thin text-xl'>{title}</p>
      <p className='w-99 mt-1 text-slate-400 text-xs'>
        {new Date(dateAdded).toLocaleDateString('en-IN', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        })}
      </p>
    </div>
  );
};

export default BlogCard;
