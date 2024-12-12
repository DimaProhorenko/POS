import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userManagementApiSlice = createApi({
  reducerPath: "userManagement",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/admin",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (body) => ({
        url: "/create-user",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userManagementApiSlice;
