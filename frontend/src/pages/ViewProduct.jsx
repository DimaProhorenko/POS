import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../features/product/productApiSlice";
import Title from "../components/common/Title";
import Loading from "../components/common/Loading";
import ProductPreview from "../features/product/ProductPreview";

const ViewProduct = () => {
  const { id } = useParams();
  const { data: product, isFetching } = useGetProductByIdQuery(id);

  return (
    <div>
      <Title>Product Details</Title>
      {isFetching && <Loading />}
      {!isFetching && product && <ProductPreview product={product} />}
    </div>
  );
};

export default ViewProduct;
