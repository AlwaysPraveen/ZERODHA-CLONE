import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await axios.get("https://zerodha-clone-6rsc.onrender.com/api/auth/verify", {
          withCredentials: true, // Automatically sends HttpOnly cookies
        });
        if (response.data.status) {
          setUser(response.data.user); // Set user data
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []); // Run only once when component mounts

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
};

// Hook for easy usage (to use easily)
export const useAuth = () => useContext(AuthContext);
