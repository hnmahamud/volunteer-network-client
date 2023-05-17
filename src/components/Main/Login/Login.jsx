import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);

  // Use Location for redirect target page or home page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";

  // Google login
  const googleHandler = () => {
    googleLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Github Login
  const gitHubHandler = () => {
    gitHubLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        toast("Login successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center text-center mt-16">
      <div className="card w-96 bg-base-100 shadow-md border rounded-md">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login!</h2>
          <button
            onClick={googleHandler}
            className="w-full border rounded-full hover:bg-gray-100"
          >
            <div className="flex justify-center items-center space-x-4 p-2">
              <FaGoogle className="h-6 w-6 text-blue-500"></FaGoogle>
              <span>Continue With Google</span>
            </div>
          </button>
          <button
            onClick={gitHubHandler}
            className="w-full border rounded-full hover:bg-gray-100"
          >
            <div className="flex justify-center items-center space-x-4 p-2">
              <FaGithub className="h-6 w-6"></FaGithub>
              <span>Continue With Github</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
