import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthPovider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const handleUpdateBtn = (event) => {
    event.preventDefault();
    const from = event.target;
    const CurrentAddress = from.CurrentAddress.value;
    const permanentAddress = from.permanentAddress.value;
    const Occupation = from.Occupation.value;
    const PostOffice = from.PostOffice.value;
    const BloodGroup = from.BloodGroup.value;
    const Gender = from.Gender.value;
    const Nationality = from.Nationality.value;

    const upDateInfo = {
      name: user.displayName,
      email: user.email,
      CurrentAddress,
      permanentAddress,
      Occupation,
      PostOffice,
      BloodGroup,
      Gender,
      Nationality,
    };

    fetch("http://localhost:5000/profileUpdate", {
      method: "POSt",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upDateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Profile Update Successfuly");
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleUpdateBtn}
        className="w-6/12 grid lg:grid-cols-1 sm:grid-cols-1  gap-2 bg-slate-100 shadow-2xl mx-auto p-6 mt-6"
      >
        <h1 className="text-center uppercase font-bold text-2xl p-4 text-red-700">
          update profile
        </h1>
        <input
          type="text"
          required
          name="Occupation"
          placeholder="Occupation"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto"
        />
        <input
          type="text"
          required
          name="Nationality"
          placeholder="Nationality"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto"
        />
        <input
          type="text"
          name="BloodGroup"
          required
          placeholder="Blood Group"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto "
        />
        <input
          type="text"
          name="CurrentAddress"
          required
          placeholder="Current Address"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto "
        />

        <input
          type="text"
          required
          name="permanentAddress"
          placeholder="permanent Address"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto"
        />
        <input
          type="text"
          required
          name="Gender"
          placeholder="Gender"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto"
        />

        <input
          type="text"
          required
          name="PostOffice"
          placeholder="Post-Office"
          className="input input-bordered input-primary lg:w-3/4 sm:w-full mx-auto"
        />

        <div className="flex mx-auto items-center justify-center gap-2 lg:flex-nowrap sm:flex-wrap	">
          <input
            type="submit"
            readOnly
            defaultValue="Submit"
            className=" input-primary w-full btn btn-outline btn-primary"
          />
          <button className="btn btn-outline btn-primary w-full">
            <Link to="/deshboard">BACK</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
