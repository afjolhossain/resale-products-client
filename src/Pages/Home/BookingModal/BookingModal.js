import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthPovider";

const BookingModal = ({ singleProduct }) => {
  const {
    productName,
    productUsedDiscription,
    productPrice,
    productImageLink,
  } = singleProduct;
  const { user } = useContext(AuthContext);

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;
    const phone = form.phone.value;
    const price = form.price.value;

    const booking = {
      productImageLink,
      productName,
      name,
      email,
      details,
      price,
      phone,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Services successfuly Added");
          event.target.reset();
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Product Name:{productName}</h3>
          <form
            onSubmit={handleBookingSubmit}
            className="mt-6 grid grid-cols-1 gap-3"
          >
            <input
              name="name"
              type="text"
              readOnly
              className="input input-bordered input-accent w-full "
              defaultValue={user?.displayName}
            />
            <input
              name="email"
              type="email"
              readOnly
              placeholder="Type here"
              className="input input-bordered input-accent w-full "
              value={user?.email}
            />
            <input
              type="text"
              name="details"
              readOnly
              className="input input-bordered input-accent w-full "
              value={productUsedDiscription}
            />
            <input
              type="text"
              required
              placeholder="Phone Namber"
              name="phone"
              className="input input-bordered input-accent w-full "
            />
            <input
              type="text"
              name="price"
              readOnly
              className="input input-bordered input-accent w-full "
              defaultValue={productPrice}
            />
            <input
              type="submit"
              className=" bg-pink-700 text-white rounded hover:bg-black ease-in duration-300 input input-bordered input-accent w-full"
              value="Confirm-Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
