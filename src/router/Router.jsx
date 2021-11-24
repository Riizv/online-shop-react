import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, WeatherStation, Settings, PageNotFound } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" components={<Home />} />

        <Route path="/weather-station" components={<WeatherStation />} />

        <Route path="/settings" components={<Settings />} />

        <Route path="*" components={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
