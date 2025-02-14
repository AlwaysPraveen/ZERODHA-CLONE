import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // Prevent unauthorized flashes

    if (!user) {
        useEffect(() => {
            window.location.href = "https://zerodha-clone-2-dyji.onrender.com/signup"; // Redirect to separate frontend (Login page is here dude)
        }, []);
        return null; // Prevent rendering anything before redirect
    }

    return children;
};

export default ProtectedRoute;
