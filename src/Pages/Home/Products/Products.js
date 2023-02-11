import React, { useEffect, useState } from "react";
import bedRoomIcon from "../../../Assets/Images/services-icon/bedroom.png";
import LivingRoomIcon from "../../../Assets/Images/services-icon/livingroom.png";
import DiningRoomIcon from "../../../Assets/Images/services-icon/dining-room.png";
import LogiIcon from "../../../Assets/Images/logo/logo.svg";
import Product from "../Home/product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://resale-furniture-server-blond.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  let [tempServices, setTempServices] = useState(products);

  const filterProducts = (productsCate) => {
    const cateProducts = products.filter((currentProducts) => {
      return currentProducts.productCatagory === productsCate;
    });
    if (productsCate === "all") {
      setTempServices(products);
    } else {
      setTempServices(cateProducts);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-center mt-6 py-6 text-3xl text-red-700 font-bold">
        Curated collections
      </h1>
      <div className="flex text-center flex-wrap text-2xl">
        <div className="mx-auto w-[250px]">
          <img src={LogiIcon} alt="" className="w-[220px]" />
          <div className="bg-pink-700 text-white h-10 rounded hover:bg-black ease-in duration-300">
            <button onClick={() => filterProducts("all")}>All</button>
          </div>
        </div>
        <div className="mx-auto ">
          <img src={bedRoomIcon} alt="" />
          <div className="bg-pink-700 text-white h-10 rounded hover:bg-black ease-in duration-300">
            <button onClick={() => filterProducts("bed-room")}>Bed room</button>
          </div>
        </div>
        <div className="mx-auto">
          <img src={LivingRoomIcon} alt="" />
          <div className="bg-pink-700 text-white h-10 rounded hover:bg-black ease-in duration-300 ">
            <button onClick={() => filterProducts("living-room")}>
              Living room
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <img src={DiningRoomIcon} alt="" />
          <div className="bg-pink-700 text-white h-10 rounded hover:bg-black ease-in duration-300">
            <button onClick={() => filterProducts("dining-room")}>
              Dining room
            </button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4">
        {tempServices.length === 0
          ? products
              .slice(0, 4)
              .map((product) => (
                <Product key={product._id} product={product}></Product>
              ))
          : tempServices.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
      </div>
    </div>
  );
};

export default Products;
