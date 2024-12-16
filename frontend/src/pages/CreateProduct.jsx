import React from "react";
import Title from "../components/common/Title";
import CreateProductForm from "../features/product/CreateProductForm";

const CreateProduct = () => {
  return (
    <div>
      <Title>Create Product</Title>
      <CreateProductForm />
    </div>
  );
};

export default CreateProduct;
