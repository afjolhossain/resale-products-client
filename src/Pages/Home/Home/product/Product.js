import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { productName, productPrice, productImageLink, _id } = product;
  return (
    <div className="card w-90 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={productImageLink} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{productName}</h2>
        <p className="tems-center text-cente">Price: {productPrice}</p>
        <div className="card-actions w-full">
          <Link
            to={`/products/${_id}`}
            className="bg-black text-white text-bold text-center h-10 rounded hover:bg-red-600 ease-in duration-300 w-full p-1.5"
          >
            <button className="">See-Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
