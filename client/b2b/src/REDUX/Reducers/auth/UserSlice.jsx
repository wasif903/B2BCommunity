import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../../utils/BaseUrlConfig';

const baseUrl = API_BASE_URL;

// Create an API slice
export const signup = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes:["groups"],
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
        url: '/api/auth/register',
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
      invalidatesTags:['groups']
    }),
    resendOtp: builder.mutation({
      query: (data) => ({
        url: '/api/auth/resend-otp',
        method: 'PATCH',
        body: data,
      }), 
    }),
    forgotPass: builder.mutation({
      query: (data) => ({
        url: '/api/auth/forgot-password',
        method: 'PATCH',
        body: data,
      }), 
    }),
    passwordReset: builder.mutation({
      query: (data) => ({
        url: '/api/auth/reset-password',
        method: 'PATCH',
        body: data,
      }), 
    }),
    
  }),
});


// Export the generated API endpoints
export const { useCreateUserMutation, useVerfiyUserOtpMutation, useUserLoginMutation, useCreateSellerMutation, useResendOtpMutation, useForgotPassMutation, usePasswordResetMutation } = signup;
