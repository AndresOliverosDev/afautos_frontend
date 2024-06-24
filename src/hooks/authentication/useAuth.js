import { useState } from "react"
import authenticationAPI from "../../services/authentication/authenticationAPI";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = async (username, password) => {
        try {
            const userData = await authenticationAPI.login(username, password);
            setUser(userData);
            setError(null);
            return userData;
        } catch (err) {
            setError(
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                    err.message ||
                    err.toString()
                );
        }
    };

    return {
        user, error, login
    }
};

export default useAuth;