import React, { useState } from "react";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import ImageInput from "../../components/common/ImageInput";
import Card from "../../components/common/Card";

const CreateProductForm = () => {
  const [formValues, setFormValues] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    quantity: 1,
    images: [],
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
      images, // Update the images array in the parent state
    }));
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Add your submit logic here (e.g., API call)
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="max-w-sm gap-6 sm:flex sm:max-w-none">
        <div className="flex-1 space-y-4">
          <Input
            label="Product Name"
            placeholder="Enter product name"
            name="productName"
            value={formValues.productName}
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
            step="0.1"
            min="0.01"
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
        <button type="submit" className="btn btn-wide btn-primary">
          Create
        </button>
      </div>
    </form>
  );
};

export default CreateProductForm;
