import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Products, Product, Cart, Settings, Register, Account,  Account_managment, PageNotFound } from "../pages";

const Router = () => {
  return (
      <Routes>
        <Route path="/" exact={(true).toString()} element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/register" element={<Register />} />

        <Route path="/account" element={<Account />} />

        <Route path="/account_managment" element={<Account_managment />} />

      <Route path="*" element={<PageNotFound />} />
      </Routes>
  );
};

export default Router;
