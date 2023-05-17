import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProviders";

const Login = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);

  // Google login
  const googleHandler = () => {
    googleLogin()
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
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
          <h2 className="card-title text-center mb-4">Login!</h2>
          <button
            onClick={googleHandler}
            className="w-full border rounded-full"
          >
            <div className="flex justify-center items-center space-x-4">
              <FaGoogle></FaGoogle>
              <span>Continue With Google</span>
            </div>
          </button>
          <button
            onClick={gitHubHandler}
            className="w-full border rounded-full"
          >
            <div className="flex justify-center items-center space-x-4">
              <FaGithub></FaGithub>
              <span>Continue With Github</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
