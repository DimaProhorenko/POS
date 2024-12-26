import React from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const ProductTableCell = ({ product }) => {
  const { _id, code, title, images, category, brand, price, quantity } =
    product;
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
      <td className="align-top">
        <div className="flex items-center gap-4">
          <Link to={`${_id}`} className="hover:text-green-500">
            <IoEye className="size-4" />
          </Link>
          <Link to={`edit/${_id}`} className="hover:text-primary">
            <MdEdit className="size-4" />
          </Link>
          <Link to={`/edit/${_id}`} className="hover:text-red-500">
            <IoIosRemoveCircleOutline className="size-4" />
          </Link>
        </div>
      </td>
    </>
  );
};

export default ProductTableCell;
