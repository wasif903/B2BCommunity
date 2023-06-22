import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../utils/BaseUrlConfig";

const baseUrl = API_BASE_URL;

// Create an API slice
export const comments = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "comments",
  tagTypes: ["comments"],
  endpoints: (builder) => ({
    // ...other endpoints
    comment: builder.mutation({
      query: (data) => {
        return {
          url: "/api/comments/post-comment", 
          method: "POST",
          body: data,
        };
      },
    }),
  
  }),
});

// Export the generated API endpoints
export const { useCommentMutation } = comments;
