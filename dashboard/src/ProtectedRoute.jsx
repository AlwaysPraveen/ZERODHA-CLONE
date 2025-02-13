import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // Prevent unauthorized flashes

    return user ? children : window.location.href = "https://zerodha-clone-2-dyji.onrender.com/signup";
};

export default ProtectedRoute;
