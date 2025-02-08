import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // Prevent unauthorized flashes

    return user ? children : window.location.href = "http://localhost:5173/signup";
};

export default ProtectedRoute;
