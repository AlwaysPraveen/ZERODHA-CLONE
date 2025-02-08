import axios from "axios";
import { useCookies } from "react-cookie";

export const useAuth = () => {
    const [cookies] = useCookies(["authToken"]);  // Read authToken cookie

    const checkAuth = async () => {
        if (!cookies.authToken) {
            return null; // No token found
        }

        try {
            const response = await axios.get("http://localhost:8080/api/auth/verify", {
                withCredentials: true,  // Send cookies in request
            });
            console.log("Auth response:", response.data);
            return response.data.user; // Returns user details if authenticated
        } catch (error) {
            console.error("Authentication failed:", error.response?.data || error.message);
            return null;
        }
    };

    return { checkAuth };
};

