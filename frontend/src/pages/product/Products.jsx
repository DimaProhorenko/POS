import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../features/product/productApiSlice";
import Title from "../../components/common/Title";
import ProductsList from "../../features/product/ProductsList";

const Products = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const { data } = useGetAllProductsQuery(page);
  console.log(data);
  return (
    <div>
      <Title>Products List</Title>
      {data && <ProductsList products={data.data} />}
    </div>
  );
};

export default Products;
