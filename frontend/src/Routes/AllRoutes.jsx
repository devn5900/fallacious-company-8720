import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Index from "../Pages/Index";
import Mens from "../Pages/ProductsPage/Mens";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add your Routes here */}
        <Route path="/" element={<Index />} />
        <Route path="/mens" element={<Mens />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
