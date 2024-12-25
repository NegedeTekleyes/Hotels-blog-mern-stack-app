import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchRelatedBlogsQuery } from '../../../redux/feature/blogs/blogsApi';

const RelatedBlogs = () => {
  const { id } = useParams(); // Get the current blog ID
  const { data: blogs = [], error, isLoading } = useFetchRelatedBlogsQuery(id); // Fetch related blogs
// console.log(blogs)
 

  return (
    <div>
      <h3 className="text-2xl font-medium pt-8 px-8 pb-5">Related Blogs</h3>
      <hr />
          {
              blogs.length > 0 ? (
        <div className="space-y-4 mt-5">
                      {
                          blogs.map((blog) => (
                            <Link
                              to={`/blogs/${blog?._id}`}
                              key={blog._id}
                                  className='flex flex-col sm:flex-row sm:items-center gap-4 shadow-sm  px-8 py-4'>
              <div className='size-14'>
                <img
                  src={blog.coverImg}
                  alt=""
                  className="h-full w-full rounded-full ring-2 ring-blue-700 "
                                      />
                                  </div>
                                  <div>
                                      <h4 className='font-medium text-[#1e73be]'>{blog?.title.substring(0, 50)}</h4>
                                      <p>{blog.description.substring(0,50) }...</p>
                                  </div>
                <p className="text-lg font-semibold">{blog.title}</p>
              
            </Link>
          ))}
        </div>
      ) : (
        <div className="p-8">No related blogs found</div>
      )}
    </div>
  );
};

export default RelatedBlogs;
