import React, { useContext } from "react";
import NavBar from "../../components/Shared/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { AuthContext } from "../../context/AuthProviders";

const Main = () => {
  const { user, fullLoading } = useContext(AuthContext);
  if (fullLoading) {
    return <LoadingSpinner fullScreen={true}></LoadingSpinner>;
  }
  return (
    <div className="w-[98%] md:w-[80%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
