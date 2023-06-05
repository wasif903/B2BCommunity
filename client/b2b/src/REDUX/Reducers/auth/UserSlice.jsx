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
        url: '/api/auth/register',
        method: 'POST',
        body: user,
      }),
    }),
    createSeller: builder.mutation({
      query: (user) => ({
        url: '/api/auth/wholeseller-register',
        method: 'POST',
        body: user,
      }),
    }),
    verfiyUserOtp: builder.mutation({
      query: (data) => ({
        url: '/api/auth/verify-otp',
        method: 'PATCH',
        body: data,
      }), 
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: data,
      }), 
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: '/api/auth/resend-otp',
        method: 'PATCH',
        body: data,
      }), 
    }),
    getRole: builder.mutation({
      query: (data) => ({
        url: '/api/auth/get-role',
        method: 'POST',
        body: data,
      }), 
    })
  }),
});


// Export the generated API endpoints
export const { useCreateUserMutation, useVerfiyUserOtpMutation, useUserLoginMutation, useCreateSellerMutation, useResendOtpMutation, useGetRoleMutation } = signup;
