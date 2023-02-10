import React, { useEffect, useState } from "react";
import Review from "./review/Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2 className="text-center font-bold text-2xl p-10">
        Our Customer Realtime Reviews
      </h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReview;
