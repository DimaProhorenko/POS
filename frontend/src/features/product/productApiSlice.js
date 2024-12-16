import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/products",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "Post",
        body,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = productApiSlice;
