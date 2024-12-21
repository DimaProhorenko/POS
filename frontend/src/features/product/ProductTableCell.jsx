import React from "react";

const ProductTableCell = ({ product }) => {
  const { code, title, images, category, brand, price, quantity } = product;
  const cells = [code, images, title, category, brand, price, quantity];
  return (
    <>
      <td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </td>
      {cells.map((item, index) => {
        if (index === 1) {
          return (
            <td key={item[0]}>
              <img
                src={item[0]}
                alt="Avatar Tailwind CSS Component"
                className="max-w-14"
              />
            </td>
          );
        }
        return (
          <td key={item} className="align-top">
            {item}
          </td>
        );
      })}
      <td></td>
    </>
  );
};

export default ProductTableCell;
