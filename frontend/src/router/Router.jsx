import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Cart, Settings, PageNotFound } from "../pages";

const Router = () => {
  return (
      <Routes>
        <Route path="/" exact={(true).toString()} element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default Router;
