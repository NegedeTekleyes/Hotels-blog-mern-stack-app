import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBlogs from './SearchBlogs';
import { useFetchBlogsQuery } from '../../redux/feature/blogs/blogsApi';

const Blogs = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const [query, setQuery] = useState({ search: '', category: '' });

    // Fetch data using redux
    const { data: blogs = [], error, isLoading } = useFetchBlogsQuery(query);
    console.log(blogs);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => setQuery({ search, category });

    return (
        <div className='mt-16 container mx-auto'>
            <SearchBlogs
                search={search}
                handleSearchChange={handleSearchChange}
                handleSearch={handleSearch}
            />

            {isLoading && <div>Loading.....</div>}
            {error && <div>{error.toString()}</div>}

            <div className='mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
                {blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Link
                            to={`/blogs/${blog._id}`}
                            key={blog._id}
                            className='shadow-md'>
                            <img
                                src={blog.coverImg}
                                alt={blog.title || 'Blog cover'}
                                className='h-80 w-full'
                            />
                            <h2 className='text-xl p-4'>{blog.title}</h2>
                        </Link>
                    ))
                ) : (
                    <div>No blogs available</div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
