import React from "react";
import { useGetMeQuery } from "../auth/authApiSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductPreview = ({ product }) => {
  const { images, code, title, category, brand, price, creator } = product;
  const { data: user } = useGetMeQuery();

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="sm:w-2/5">
        <Swiper
          spaceBetween={20}
          grabCursor
          navigation
          modules={[Navigation]}
          loop
        >
          {images.map((image, idx) => (
            <SwiperSlide key={image}>
              <img src={image} alt={`Image ${title} ${idx}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="overflow-x-auto sm:w-3/5">
        <table className="table table-zebra">
          <tbody>
            <tr>
              <th>Product Code</th>
              <td>{code}</td>
            </tr>
            <tr>
              <th>Product Name</th>
              <td>{title}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{category}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{brand}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{price}</td>
            </tr>
            {user?.role === "admin" && (
              <tr>
                <th>Creator</th>
                <td>
                  <p className="flex gap-4">
                    <span>{creator.name}</span>
                    <span>-</span>
                    <span>{creator.email}</span>
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPreview;
