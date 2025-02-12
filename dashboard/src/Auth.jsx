import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const useAuth = () => {
    const [cookies] = useCookies(["authToken"]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            if (!cookies.authToken) {
                setUser(null);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("https://zerodha-clone-6rsc.onrender.com/api/auth/verify", {
                    withCredentials: true, // Ensure cookies are sent with request
                });

                if (response.data.status) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Authentication failed:", error.response?.data || error.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        verifyUser();
    }, [cookies.authToken]); // Runs whenever authToken changes

    return { user, loading };
};
