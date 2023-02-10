import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import CustomerReview from "../ReviewCustomer/CustomerReview";
import WhySecondFurniture from "../WhySecondFurniture/WhySecondFurniture";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <WhySecondFurniture></WhySecondFurniture>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
