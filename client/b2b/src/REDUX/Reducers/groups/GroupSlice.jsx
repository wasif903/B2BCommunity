import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../../utils/BaseUrlConfig';


const baseUrl = API_BASE_URL;

// Create an API slice
export const group = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: 'groups',
  tagTypes: ["groups"],
  endpoints: (builder) => ({
    // ...other endpoints
    getAllGroups: builder.query({
      query: () => {
        return {
          url: '/api/groups/get-groups', // Update the URL to the correct endpoint for fetching groups
          method: 'GET',
        }
      },
      providesTags: ["groups"]

    }),
    getSingleGroups: builder.query({
      query: (id) => {
        return {
          url: `/api/groups/single-group/${id}`, 
          method: 'GET',
        }
      },
    }),
  }),
});

// Export the generated API endpoints
export const { useGetAllGroupsQuery } = group;
