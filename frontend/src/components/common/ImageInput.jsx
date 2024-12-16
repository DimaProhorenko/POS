import React, { useState, useEffect } from "react";
import { BsFiles } from "react-icons/bs";

const PreviewImage = ({ image, onRemove }) => {
  return (
    <div className="relative group">
      <img
        src={image.url}
        alt={image.name}
        className="w-full h-full object-cover rounded shadow"
      />
      <button
        onClick={() => onRemove(image.name)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        ×
      </button>
    </div>
  );
};

const ImageInput = ({ handleChange }) => {
  const [images, setImages] = useState([]);
  const [imagesPreviews, setImagesPreviews] = useState([]);

  useEffect(() => {
    handleChange(images); // Only runs after images state has been updated
  }, [images]);

  const removeImage = (name) => {
    const filteredImages = images.filter((image) => image.name !== name);
    updateImages(filteredImages);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImgChange = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      // Convert files to base64
      const base64Images = await Promise.all(
        files.map((file) => convertToBase64(file))
      );

      // Create previews
      const previews = files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));

      // Update both previews and base64 images state
      setImagesPreviews((prevState) => [...prevState, ...previews]);
      setImages((prevState) => [...prevState, ...base64Images]);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div
        className="aspect-video border border-dotted relative"
        // onDrop={handleDrop}
        // onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="opacity-0 w-full h-full block cursor-pointer"
          onChange={handleImgChange}
        />
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center pointer-events-none">
          <BsFiles className="size-8" />
          <p className="max-w-36 text-slate-500 text-sm text-center">
            Drag & Drop multiple images here or{" "}
            <span className="text-primary">Select</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {imagesPreviews.map((image) => (
          <PreviewImage key={image.name} image={image} onRemove={removeImage} />
        ))}
      </div>
    </div>
  );
};

export default ImageInput;
