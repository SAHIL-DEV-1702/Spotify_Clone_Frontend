import { useState, useEffect } from "react";
import { getCurrentUser } from "../service/authApi";
import { toast } from "react-toastify"
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    console.log("AuthProvider Rendered");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await getCurrentUser();
                setUser(res.data.user);
            } catch (error) {
                toast.error(error)
                setUser(null);
            }
        };

        fetchUser();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};