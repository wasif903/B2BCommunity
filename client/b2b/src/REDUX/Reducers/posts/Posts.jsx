import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../utils/BaseUrlConfig";

const baseUrl = API_BASE_URL;

// Create an API slice
export const posts = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "posts",
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    // ...other endpoints
    createPost: builder.mutation({
      query: (data) => {
        return {
          url: "/api/posts/create-post", // Update the URL to the correct endpoint for fetching groups
          method: "POST",
          body: data,
        };
      },
    }),
    getPost: builder.query({
      query: (id) => {
        return {
          url:`/api/posts//all-posts/${id}`,
          method:"GET"
        }
      }
    })
  }),
});

// Export the generated API endpoints
export const { useCreatePostMutation, useGetPostQuery } = posts;
