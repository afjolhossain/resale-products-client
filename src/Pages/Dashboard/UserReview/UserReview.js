import React from "react";
import Swal from "sweetalert2";

const UserReview = () => {
  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your review has been added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const comment = form.comment.value;
    const Designation = form.Designation.value;
    console.log(name, comment);

    const review = {
      name,
      comment,
      Designation,
    };
    fetch("https://resale-furniture-server-blond.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert();
          event.target.reset();
        }
      });
  };
  return (
    <div className="text-center">
      <p className="text-center text-2xl font-bold text-red-700 p-6">
        Please do your valuable comment{" "}
      </p>
      <form onSubmit={handleReview} className="w-2/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Designation</span>
          </label>
          <input
            type="text"
            name="Designation"
            placeholder="Designation"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Comment</span>
          </label>
          <textarea
            type="text"
            name="comment"
            placeholder="Your comment within 100 words"
            className="input input-bordered min-h-min max-h-60 w-full	"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white text-bold text-center mt-6 h-10 rounded hover:bg-red-600 ease-in duration-300 w-full p-1.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserReview;
