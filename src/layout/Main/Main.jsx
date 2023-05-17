import React from "react";
import NavBar from "../../components/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="w-[98%] md:w-[80%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
