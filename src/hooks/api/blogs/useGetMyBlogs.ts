import { HashnodeAPIResponse } from '../../../types/blog.type';

const fetchBlogsQuery = `{
        user(username: "manishmandal") {
          publication {
            posts(page: 0) {
             slug
             title
             coverImage
             dateAdded
            }
          }
        }
      }`;

const useGetMyBlogs = () => {
  const fetchBlogs = async () => {
    const response = await fetch('https://api.hashnode.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: fetchBlogsQuery }),
    });
    return response.json() as Promise<HashnodeAPIResponse>;
  };

  return {
    fetchBlogs,
  };
};

export { useGetMyBlogs };
