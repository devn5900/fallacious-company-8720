import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Index from "../Pages/Index";
import Mens from "../Pages/ProductsPage/Mens";
import Cart from "../Pages/cartPage/cart";
import Checkout from "../Pages/checkoutPage/checkout";
import Womens from "../Pages/ProductsPage/Womens";
import Accessories from "../Pages/ProductsPage/Accessories";
import SignUp from "../Components/Authentication/Signup";
import Login from "../Components/Authentication/login";
import Singleuser from "../Components/Single_user/singleuser";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Index />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route path="/womens" element={<Womens />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id/details" element={<Singleuser />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
