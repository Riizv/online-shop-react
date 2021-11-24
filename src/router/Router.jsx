import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, WeatherStation, Settings, PageNotFound } from "../pages";

const Router = () => {
  return (
      <Routes>
        <Route path="/" exact={(true).toString()} element={<Home />} />

        <Route path="/weather-station" element={<WeatherStation />} />

        <Route path="/settings" element={<Settings />} />

      {/*<Route path="*" components={<PageNotFound />} />*/}
      </Routes>
  );
};

export default Router;
