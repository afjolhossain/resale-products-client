import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const alertDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    fetch("https://resale-furniture-server-blond.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDeleteButton = (_id) => {
    fetch(`https://resale-furniture-server-blond.vercel.app/booking/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alertDelete();
          const remaining = allOrders.filter((odr) => odr._id !== _id);
          setAllOrders(remaining);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Price</th>
              <th>phone</th>
              <th>Picture</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody className="text-center lg:w-full sm:w-full">
            {/* <!-- row 1 --> */}
            {allOrders.map((allOrder, i) => (
              <tr key={allOrder._id}>
                <th>{i + 1}</th>
                <td>{allOrder.name}</td>
                <td>{allOrder.email}</td>
                <td>{allOrder.price}</td>
                <td>{allOrder.phone}</td>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded">
                      <img
                        src={allOrder.productImageLink}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <button onClick={() => handleDeleteButton(allOrder._id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 font-bold hover:text-red-900 w-8 h-8 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
