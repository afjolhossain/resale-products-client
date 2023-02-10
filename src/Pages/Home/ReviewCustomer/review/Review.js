import React from "react";

const Review = ({ review }) => {
  const { name, comment, Designation } = review;

  return (
    <div className="bg-slate-900 text-center lg:w-2/4 sm:3/4 mx-auto h-72 py-10 px-5">
      <p className="text-2xl text-slate-50 py-2">{name}</p>
      <p className="text-1xl font-bold text-orange-800 py-1">{Designation}</p>
      <p className="font-bold text-slate-200 italic">{comment}</p>
    </div>
  );
};

export default Review;
