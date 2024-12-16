import React, { useState } from "react";
import { BsFiles } from "react-icons/bs";

const PreviewImage = ({ key, image }) => {
  return (
    <div key={key} className="relative group">
      <img
        src={image.url}
        alt={image.name}
        className="w-full h-full object-cover rounded shadow"
      />
      <button
        onClick={() => removeImage(image.name)}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
      >
        ×
      </button>
    </div>
  );
};

const ImageInput = () => {
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const filePreviews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...filePreviews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const filePreviews = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...filePreviews]);
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeImage = (name) => {
    setImages((prev) => prev.filter((image) => image.name !== name));
  };
  return (
    <div className="w-full space-y-6">
      <div
        className="aspect-video border border-dotted relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="opacity-0 w-full h-full block cursor-pointer"
          onChange={handleFileChange}
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
        {images.map((image) => (
          <PreviewImage key={image.name} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageInput;