import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApiSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({ url: "/logout", method: "POST" }),
    }),
    getMe: builder.query({
      query: () => "/me",
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetMeQuery } =
  authApiSlice;