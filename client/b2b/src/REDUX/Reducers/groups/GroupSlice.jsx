import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../utils/BaseUrlConfig";

const baseUrl = API_BASE_URL;

// Create an API slice
export const group = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "groups",
  tagTypes: ["groups"],
  endpoints: (builder) => ({
    // ...other endpoints
    getAllGroups: builder.query({
      query: () => {
        return {
          url: "/api/groups/get-groups", // Update the URL to the correct endpoint for fetching groups
          method: "GET",
        };
      },
      providesTags: ["groups"],
    }),
    getSingleGroup: builder.query({
      query: (id) => {
        return {
          url: `/api/groups/single-group/${id}`,
          method: "GET",
        };
      },
    }),
    requestToJoin: builder.mutation({
      query: (data) => {
        const { id, ...body } = data
        return {
          url: `/api/groups/${id}/request-to-join`,
          method: "PATCH",
          body
        };
      },
    }),
    getPendingReq: builder.query({
      query: (id) => {
        return {
          url: `/api/groups/${id}/get-pending-requests`,
          method: "GET",
        };
      },
    }),
  }),
});

// Export the generated API endpoints
export const {
  useGetAllGroupsQuery,
  useGetSingleGroupQuery,
  useRequestToJoinMutation,
} = group;
