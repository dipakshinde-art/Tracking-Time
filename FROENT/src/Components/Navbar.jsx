import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashbord/Dashboard.jsx";
import WithSubnavigation from "./Navbar/Navbar.jsx";

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WithSubnavigation />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default Navbar;
