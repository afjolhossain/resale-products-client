import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://resale-furniture-server-blond.vercel.app/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, [id]);

  return (
    <div className="hero  ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={singleProduct.productImageLink}
          className=" rounded-lg shadow-2xl"
          alt=""
        />
        <div className="px-10">
          <h1 className="text-4xl text-red-500 font-bold">
            {singleProduct.productName}
          </h1>
          <p className="py-6 text-2xl font-bold ">
            Overall Dimensions: {singleProduct.productDiscription}
          </p>
          <p className="text-1xl ">Catagory: {singleProduct.productCatagory}</p>
          <p className=" py-4">
            Condition: {singleProduct.productUsedDiscription}
          </p>
          <p className="text-3xl font-bold text-red-700">
            Price: {singleProduct.productPrice}
          </p>
          {/* <Link to="/order">
            <button className="bg-black text-white text-bold text-center h-10 rounded hover:bg-red-600 ease-in duration-300 w-2/4 text-center mt-10 p-1.5">
              Order Now
            </button>
          </Link> */}
          <BookingModal singleProduct={singleProduct}></BookingModal>

          <label
            htmlFor="booking-modal"
            className="bg-black btn w-[300px] text-white text-bold text-center h-10 rounded hover:bg-red-600 ease-in duration-300 text-center mt-5 p-1.5"
          >
            Order Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
