import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Index from "../Pages/Index";
import Mens from "../Pages/ProductsPage/Mens";
import Cart from "../Pages/cartPage/cart";
import Womens from "../Pages/ProductsPage/Womens";
import Checkout from "../Pages/checkoutPage/checkout";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/womens" element={<Womens />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
