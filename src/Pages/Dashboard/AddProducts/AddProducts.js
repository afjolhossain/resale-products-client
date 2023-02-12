import React from "react";
import Swal from "sweetalert2";

const AddProducts = () => {
  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your product has been added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productCatagory = form.productCatagory.value;
    const productPrice = form.productPrice.value;
    const productDiscription = form.productDiscription.value;
    const productUsedDiscription = form.productUsedDiscription.value;
    const productImageLink = form.productImageLink.value;

    const products = {
      productName,
      productCatagory,
      productPrice,
      productDiscription,
      productUsedDiscription,
      productImageLink,
    };

    fetch("https://resale-furniture-server-blond.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert();
          e.target.reset();
        }
      });
  };
  return (
    <div className=" text-center h-full">
      <p className="text-2xl font-bold p-10">Add your used poducts</p>
      <div className="">
        <form
          onSubmit={handleAddProducts}
          className="gap-3 grid grid-cols-1 lg:w-5/12 sm:w-full p-4 mx-auto shadow-2xl "
        >
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productCatagory"
            placeholder="Product-Catagory"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productPrice"
            placeholder="Price"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productDiscription"
            placeholder="Product discription"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productImageLink"
            placeholder="Image Link"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productUsedDiscription"
            placeholder="used Description"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            name="productUsedDiscription"
            placeholder="used Description"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="submit"
            defaultValue="Submit"
            className="input input-bordered input-primary w-full bg-pink-700 text-white h-10 rounded hover:bg-black ease-in duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
