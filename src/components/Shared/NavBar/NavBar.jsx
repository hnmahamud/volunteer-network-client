import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logos/Group 1329.png";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProviders";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const { pathname } = useLocation();

  const logoutHandler = () => {
    logout()
      .then(() => {
        localStorage.removeItem("volunteer-access-token");
        toast("Logout successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <NavLink to="/" className={pathname === "/" ? "font-bold" : ""}>
        Home
      </NavLink>
      <NavLink
        to="/user-events"
        className={pathname === "/user-events" ? "font-bold" : ""}
      >
        Events
      </NavLink>
      <NavLink
        to="/volunteer-registration"
        className={pathname === "/volunteer-registration" ? "font-bold" : ""}
      >
        Volunteer Registration
      </NavLink>
      {user && <p className="text-blue-500 font-bold">{user.displayName}</p>}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="normal-case text-xl">
          <img className="h-12 w-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{navItems}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <button
            onClick={logoutHandler}
            className="btn btn-primary btn-xs md:btn-sm"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-primary btn-xs md:btn-sm">
            Login
          </Link>
        )}
        <Link to="/admin-dashboard" className="btn btn-xs md:btn-sm">
          Admin
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
