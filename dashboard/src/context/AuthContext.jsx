import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info
  const [cookies] = useCookies(["authToken"]);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (cookies.authToken) {
          const response = await axios.get("https://zerodha-clone-6rsc.onrender.com/api/auth/verify", {
            withCredentials: true,
          });
          if (response.data.status) {
            setUser(response.data.user); // Set user data
          }
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setUser(null);
      }
    };
    verifyUser();
  }, [cookies.authToken]); // Run when token changes

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

// Hook for easy usage (to use easily)
export const useAuth = () => useContext(AuthContext);
