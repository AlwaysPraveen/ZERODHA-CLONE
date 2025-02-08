import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["authToken"]);

  if (!cookies.authToken) {
    return <Navigate to="http://localhost:5173/signup" replace />;
  }

  return children;
};

export default ProtectedRoute;
