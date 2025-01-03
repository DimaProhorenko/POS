import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import ImageInput from "../../components/common/ImageInput";
import Card from "../../components/common/Card";
import LoadingButton from "../../components/common/LoadingButton";

const EditProductForm = ({ product }) => {
  const [formValues, setFormValues] = useState({
    title: product.title,
    category: product.category,
    brand: product.brand,
    price: product.price,
    quantity: product.quantity,
    images: product.images,
  });

  // Handler to update form values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Handler for image input
  const handleImageChange = (images) => {
    setFormValues((prev) => ({
      ...prev,
      images: images,
    }));
  };

  return (
    <form className="space-y-6">
      <div className="max-w-sm gap-6 sm:flex sm:max-w-none">
        <div className="flex-1 space-y-4">
          <Input
            label="Product Name"
            placeholder="Enter product name"
            name="title"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <Select
            label="Category"
            name="category"
            options={[
              { value: "", label: "Choose Category" },
              { value: "phones", label: "Phones" },
            ]}
            value={formValues.category}
            onChange={handleInputChange}
          />
          <Select
            label="Brand"
            name="brand"
            value={formValues.brand}
            onChange={handleInputChange}
            options={[
              { value: "", label: "Choose Brand" },
              { value: "apple", label: "Apple" },
            ]}
          />
          <Input
            type="number"
            label="product price"
            name="price"
            placeholder="Enter product price"
            value={formValues.price}
            onChange={handleInputChange}
          />
          <Input
            type="number"
            name="quantity"
            label="Quantity"
            value={formValues.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-1">
          <Card className="max-w-sm p-6">
            <ImageInput name="images" handleChange={handleImageChange} />
          </Card>
        </div>
      </div>
      <div>
        {/* <LoadingButton isLoading={isLoading} className="btn-wide">
          Create
        </LoadingButton> */}
      </div>
    </form>
  );
};

export default EditProductForm;
