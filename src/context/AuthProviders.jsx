import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create context API
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  // State
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [fullLoading, setFullLoading] = useState(true);

  // Google login
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub login
  const gitHubLogin = () => {
    const gitHubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, gitHubProvider);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // State observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setFullLoading(false);

      // if (currentUser && currentUser.email) {
      //   const loggedUser = {
      //     email: currentUser.email,
      //   };
      //   fetch("https://car-doctor-server-ten-sable.vercel.app/jwt", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("car-doctor-access-token", data.token);
      //     })
      //     .catch((error) => console.log(error));
      // } else {
      //   localStorage.removeItem("car-doctor-access-token");
      // }

      return () => {
        return unsubscribe();
      };
    });
  }, []);

  // Data sent as context API
  const authInfo = {
    loading,
    setLoading,
    fullLoading,
    setFullLoading,
    user,
    setUser,
    googleLogin,
    gitHubLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
