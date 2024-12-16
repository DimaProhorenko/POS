import React from "react";
import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import ImageInput from "../../components/common/ImageInput";
import Card from "../../components/common/Card";

const CreateProductForm = () => {
  return (
    <form className="max-w-sm gap-6 sm:flex sm:max-w-none">
      <div className="flex-1">
        <Input label="Product Name" placeholder="Enter product name" />
        <Select
          label="Category"
          options={[
            { value: "", label: "Choose Category" },
            { value: "phones", label: "Phones" },
          ]}
        />
        <Select
          label="Brand"
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
          placeholder="Enter product price"
        />
        <Input type="number" label="quantity" value="1" />
      </div>
      <div className="flex-1">
        <Card className="max-w-sm p-6">
          <ImageInput />
        </Card>
      </div>
    </form>
  );
};

export default CreateProductForm;
