import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userIcon from "../../../Assets/Images/footer-icon/user.png";
import { AuthContext } from "../../../contexts/AuthPovider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <Link
        className="text-2xl ml-3 font-bold text-red-700 hover:text-slate-900	blac ease-in"
        to="/"
      >
        Home
      </Link>
      <Link
        className="ml-3 text-2xl font-bold text-red-700 hover:text-slate-900	blac ease-in"
        to="/products"
      >
        Products
      </Link>
      <Link
        className="ml-3 text-2xl font-bold text-red-700 hover:text-slate-900	blac ease-in"
        to="/about"
      >
        About-us
      </Link>
      <Link
        className="ml-3 text-2xl font-bold text-red-700 hover:text-slate-900	blac ease-in"
        to="/contactus"
      >
        Contact-Us
      </Link>

      {user?.uid ? (
        <>
          <Link
            className="ml-3 text-2xl font-bold text-green-800 hover:text-neutral-800	blac ease-in"
            to="/deshboard"
          >
            Dashboard
          </Link>
          <p className="ml-4 text-2xl text-sky-900">{user.displayName}</p>
          <button
            className="mr-5 ml-3 text-2xl font-bold text-rose-900"
            onClick={handleLogOut}
          >
            Sign out
          </button>
        </>
      ) : (
        <Link to="/login" className="ml-3 ">
          <img className="w-10 	" src={userIcon} alt="" />
        </Link>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-200 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className=" text-xl font-bold text-red-700 ml-6">
          AFJOLRECO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
