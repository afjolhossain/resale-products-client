import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/Signup/SignUp";
import DashBoard from "../../Pages/Dashboard/DashBoard";
import DashboardLayout from "../../Layout/DashboardLayOut/DashboardLayout";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import UserReview from "../../Pages/Dashboard/UserReview/UserReview";
import SingleProduct from "../../Pages/Home/singleProduct/SingleProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyOrder from "../../Pages/Dashboard/My Order/MyOrder";
import AllOrders from "../../Pages/Dashboard/AllOrders/AllOrders";
import UpdateProfile from "../../Pages/Dashboard/Updateprofile/UpdateProfile";
import ContactUs from "../../Pages/Contactus/ContactUs";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/contactus",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "products/:id",
        element: (
          <PrivateRoute>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        ),
      },

      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/updateprofile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/deshboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/deshboard/addProducts",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/deshboard/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/deshboard/allorders",
        element: <AllOrders></AllOrders>,
      },
      {
        path: "/deshboard/userReview",
        element: <UserReview></UserReview>,
      },
    ],
  },
]);
export default router;
