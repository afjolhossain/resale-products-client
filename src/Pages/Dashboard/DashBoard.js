import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthPovider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [upDateProfile, setUpDateProfile] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/profileUpdate?email=${user.email}`, {
        method: "GET",
        headers: {},
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          const myProfile = data.filter(
            (singleData) => singleData.email === user.email
          );
          setUpDateProfile(myProfile);
        });
    }
  }, [user]);

  return (
    <div className="">
      <h1 className="text-center text-2xl p-4 font-bold">
        WELCOME TO <span className="text-pink-900">DESHBOARD </span>{" "}
      </h1>

      <div className="w-2/4 p-4 mx-auto  shadow-2xl">
        <p></p>
        <div className="text-center">
          {user.photoURL ? (
            <img
              className="mx-auto w-20 rounded-full "
              src={user.photoURL}
              alt=""
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-auto w-20 rounded-full "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          )}
          <p className="text-2xl text-center ">
            <span className="text-orange-700">Name: </span>
            {user.displayName}
          </p>
          {upDateProfile.map((profile) => (
            <div className="text-2xl text-start leading-10 font-bold">
              <h1>
                <span className="text-orange-700">Nationality: </span>
                {profile.Nationality}
              </h1>
              <h1>
                <span className="text-orange-700">Gender: </span>
                {profile.Gender}
              </h1>
              <h1>
                <span className="text-orange-700">Occupation: </span>
                {profile.Occupation}
              </h1>
              <h1>
                <span className="text-orange-700">Blood-Group: </span>
                {profile.BloodGroup}
              </h1>
              <h1>
                <span className="text-orange-700">Current-Address: </span>
                {profile.CurrentAddress}
              </h1>
              <h1>
                <span className="text-orange-700">Permanent-Address: </span>
                {profile.permanentAddress}
              </h1>
              <h1>
                <span className="text-orange-700">PostOffice: </span>
                {profile.PostOffice}
              </h1>
            </div>
          ))}
          <button className="w-5/12 h-10 mt-4 mx-auto input-primary  btn btn-outline btn-primary">
            <Link to="/updateprofile">Update Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
