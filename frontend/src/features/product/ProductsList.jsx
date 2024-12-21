import React from "react";
import ProductTableCell from "./ProductTableCell";

const ProductsList = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Code</th>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item._id}>
              <ProductTableCell product={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
