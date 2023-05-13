import React, { useEffect, useState } from 'react';
import { useGetMyBlogs } from '../../src/hooks/api/blogs/useGetMyBlogs';
import { BlogPost } from '../../src/types/blog.type';
import BlogCard from './BlogCard';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchBlogs } = useGetMyBlogs();

  useEffect(() => {
    (async () => {
      const blogs = await fetchBlogs();

      if (blogs.data) {
        setBlogPosts(blogs.data.user.publication.posts);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className='flex  justify-center ms:flex-col '>
      {isLoading ? <p>Loading...</p> : null}
      {blogPosts
        ? blogPosts.map((blog) => {
            // if(blogPosts.length > 0){

            return (
              <div className=''>
                <BlogCard {...blog} />
              </div>
            );
            // }
          })
        : null}
    </div>
  );
};

export default Blogs;
