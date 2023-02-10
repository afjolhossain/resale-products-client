import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu  w-80 bg-base-100 text-base-content">
            <ul className="menu bg-black text-white p-4 w-80 h-full  font-bold ">
              <li className="hover:bg-red-900">
                <Link to="/deshboard/addProducts">Add-Products</Link>
              </li>
              <li className="hover:bg-red-900">
                <Link to="/deshboard/myorder">My-Order</Link>
              </li>
              <li className="hover:bg-red-900">
                <Link to="/deshboard/allorders">All-Orders</Link>
              </li>
              <li className="hover:bg-red-900 ">
                <Link to="/deshboard/userReview">Your-Review</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
