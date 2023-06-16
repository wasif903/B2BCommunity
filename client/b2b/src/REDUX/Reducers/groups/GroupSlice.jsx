import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../../utils/BaseUrlConfig";

const baseUrl = API_BASE_URL;

// Create an API slice
export const group = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  reducerPath: "groups",
  tagTypes: ["groups", "pendingReq", "getAllMembmers", 'getAllSellers'],
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
      providesTags: ['pendingReq']
    }),
    rejectReq: builder.mutation({
      query: (data) => {
        const { groupdID, userid, ...body } = data
        return {
          url: `/api/groups/${groupdID}/reject-request/${userid}`,
          method: "PATCH",
          body
        };
      },
      invalidatesTags: ['pendingReq']
    }),
    acceptReq: builder.mutation({
      query: (data) => {
        const { groupdID, userid, ...body } = data
        return {
          url: `/api/groups/${groupdID}/accept-request/${userid}`,
          method: "PATCH",
          body
        };
      },
      invalidatesTags: ['pendingReq']
    }),
    getAllMembers: builder.query({
      query: (id) => {
        return {
          url: `/api/groups/${id}/get-all-members`,
          method: "GET",
        };
      },
      providesTags: ['getAllMembmers']
    }),
    removeMember: builder.mutation({
      query: (data) => {
        const { groupID, userid, ...body } = data
        return {
          url: `/api/groups/${groupID}/remove-member/${userid}`,
          method: "PATCH",
          body
        };
      },
      invalidatesTags: ['getAllMembmers']
    }),
    assignGroup: builder.mutation({
      query: (data) => {
        const { groupID, userid, ...body } = data
        return {
          url: `/api/groups/${groupID}/assign-group/${userid}`,
          method: "PATCH",
          body
        };
      },
      invalidatesTags: ['getAllSellers']
    }),
    getSellers: builder.query({
      query: () => ({
        url: '/api/auth/all-sellers',
        method: 'GET',
      }),
      providesTags: ['getAllSellers']
    }),
    removeUser: builder.mutation({
      query: (id) => ({
        url: `/api/auth/delete-user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['getAllSellers']
    }),
    unAssignedGroups: builder.query({
      query: () => ({
        url: '/api/groups/available-groups-to-assign',
        method: 'GET'
      })
    })
  }),
});

// Export the generated API endpoints
export const {
  useGetAllGroupsQuery,
  useGetSingleGroupQuery,
  useRequestToJoinMutation,
  useGetPendingReqQuery,
  useRejectReqMutation,
  useAcceptReqMutation,
  useGetAllMembersQuery,
  useRemoveMemberMutation,
  useAssignGroupMutation,
  useGetSellersQuery,
  useRemoveUserMutation,
  useUnAssignedGroupsQuery
} = group;
