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
      invalidatesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Products"],
    }),
    getAllProducts: builder.query({
      query: (page) => `?page=${page}`,
      providesTags: ["Products"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductByIdQuery,
  useGetAllProductsQuery,
} = productApiSlice;
