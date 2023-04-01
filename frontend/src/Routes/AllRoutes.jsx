import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Index from "../Pages/Index";
import Mens from "../Pages/ProductsPage/Mens";
import Cart from "../Pages/cartPage/cart";
<<<<<<< HEAD
import Checkout from "../Pages/checkoutPage/checkout";
=======
import Womens from "../Pages/ProductsPage/Womens";
>>>>>>> 0a5f541a051ba130853868c56e8d11f58136d3e6
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<Mens />} />
<<<<<<< HEAD
        <Route path="/checkout" element={<Checkout />} />
=======
        <Route path="/womens" element={<Womens />} />
>>>>>>> 0a5f541a051ba130853868c56e8d11f58136d3e6
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
