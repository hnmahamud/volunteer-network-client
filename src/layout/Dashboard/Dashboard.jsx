import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logos/Group 1329.png";
import { FaUserFriends, FaSlideshare, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-[98%] md:w-[90%] mx-auto my-8">
      <div className="md:grid md:grid-cols-4 md:gap-16">
        <div className="md:col-span-1 flex flex-col space-y-4 md:space-y-8">
          <img className="h-20" src={logo} alt="" />
          <Link
            to="/admin-dashboard"
            className={
              pathname === "/admin-dashboard"
                ? "flex items-center gap-2 text-blue-500"
                : "flex items-center gap-2"
            }
          >
            <FaUserFriends></FaUserFriends>
            <span>Volunteer register list</span>
          </Link>
          <Link
            to="/admin-dashboard/event-list"
            className={
              pathname === "/admin-dashboard/event-list"
                ? "flex items-center gap-2 text-blue-500"
                : "flex items-center gap-2"
            }
          >
            <FaSlideshare></FaSlideshare>
            <span>Event List</span>
          </Link>
          <Link
            to="/admin-dashboard/add-event"
            className={
              pathname === "/admin-dashboard/add-event"
                ? "flex items-center gap-2 text-blue-500"
                : "flex items-center gap-2"
            }
          >
            <FaPlus></FaPlus>
            <span>Add event</span>
          </Link>
        </div>
        <div className="md:col-span-3 bg-[#F4F7FC] p-4 rounded-md mt-8 md:mt-0">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
