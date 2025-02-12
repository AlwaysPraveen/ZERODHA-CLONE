import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // Prevent unauthorized flashes

    return user ? children : window.location.href = "https://frontend-o4jx5vcz3-praveen-kumars-projects-de5fd3b2.vercel.app/signup";
};

export default ProtectedRoute;
