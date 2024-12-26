import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../features/product/productApiSlice";
import Title from "../../components/common/Title";
import Loading from "../../components/common/Loading";
import EditProductForm from "../../features/product/EditProductForm";

const EditProduct = () => {
  const { id } = useParams();
  const { data: product, isFetching } = useGetProductByIdQuery(id);
  return (
    <div>
      <Title>Product Details</Title>
      {isFetching && <Loading />}
      {!isFetching && product && <EditProductForm product={product} />}
    </div>
  );
};

export default EditProduct;
