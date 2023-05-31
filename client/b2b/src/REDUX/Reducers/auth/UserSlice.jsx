import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your base URL
const baseUrl = 'http://localhost:5000/';

// Create an API slice
export const signup = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // ...other endpoints
    createUser: builder.mutation({
      query: (user) => ({
        url: 'auth/register',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});


// Export the generated API endpoints
export const { useCreateUserMutation } = signup;
