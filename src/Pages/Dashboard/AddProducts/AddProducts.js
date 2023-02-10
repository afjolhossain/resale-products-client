import React from "react";

const AddProducts = () => {
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

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Services successfuly Added");
          e.target.reset();
        }
      });
  };
  return (
    <div className=" text-center h-full">
      <p className="text-2xl font-bold p-10">Add your used poducts</p>
      <div className="w-2/4 mx-auto shadow-3xl bg-red-300">
        <form onSubmit={handleAddProducts}>
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="input w-full mt-4 max-w-xs"
          />
          <br />
          <input
            type="text"
            name="productCatagory"
            placeholder="Product-Catagory"
            className="input mt-4 w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            name="productPrice"
            placeholder="Price"
            className="input mt-4 w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            name="productDiscription"
            placeholder="Product discription"
            className="input mt-4 w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            name="productImageLink"
            placeholder="Image Link"
            className="input mt-4 w-full max-w-xs"
          />
          <br />
          <input
            type="text"
            name="productUsedDiscription"
            placeholder="used Description"
            className="input mt-4 mb-4 w-full max-w-xs"
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary w-full mb-4 max-w-xs"
          >
            Button
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
