import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../../utils/BaseUrlConfig';

const baseUrl = API_BASE_URL;

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
    verfiyUserOtp: builder.mutation({
      query: (data) => ({
        url: 'auth/verify-otp',
        method: 'PATCH',
        body: data,
      }), 
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: 'auth/login',
        method: 'PATCH',
        body: data,
      }), 
    })
  }),
});


// Export the generated API endpoints
export const { useCreateUserMutation, useVerfiyUserOtpMutation, useUserLoginMutation } = signup;
