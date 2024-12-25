import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: 'blogsApi', // Unique name for this slice of the state
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/', // Base URL for your API
    prepareHeaders: (headers, { getState }) => {
      // Add Authorization header if token exists
      const token = getState()?.auth?.token; // Access token from the Redux state
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
    credentials: 'include', // Include cookies with requests
  }),
  tagTypes: ['Blogs'], // Tag to handle cache updates
  endpoints: (builder) => ({
    // Fetch all blogs with optional search, category, and location filters
    fetchBlogs: builder.query({
      query: ({ search = '', category = '', location = '' }) => {
        // Dynamically build query string
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (category) params.append('category', category);
        if (location) params.append('location', location);

        return `/blogs?${params.toString()}`;
      },
      providesTags: ['Blogs'], // Tag for cache invalidation
    }),

    // Fetch a single blog by ID
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),

    // Fetch related blogs
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),

    // Create a new blog post
    postBlog: builder.mutation({
      query: (newBlog) => ({
        url: `/blogs/create-post`,
        method: 'POST',
        body: newBlog,
      }),
      invalidatesTags: ['Blogs'], // Invalidate cache after creation
    }),

    // Update an existing blog post
    updateBlog: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/blogs/update-post/${id}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }],
    }),

    // Delete a blog post
    deleteBlog: builder.mutation({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }],
    }),
  }),
});

// Export hooks for queries and mutations
export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useFetchRelatedBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;

export default blogApi;
