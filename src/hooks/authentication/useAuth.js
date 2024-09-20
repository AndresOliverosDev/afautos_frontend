import { useState } from "react";
import authenticationAPI from "../../services/authentication/authenticationAPI";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [errorAuth, setErrorAuth] = useState(null);
    const [responseRegister, setResponseRegister] = useState(null);
    const [loadingResponseRegister, setLoadingResponseRegister] = useState(false);

    const login = async (username, password) => {
        try {
            const userData = await authenticationAPI.login(username, password);
            setUser(userData);
            setErrorAuth(null);
            return userData;
        } catch (error) {
            setErrorAuth(error.message);
        }
    };

    const createUser = async (user) => {
        setLoadingResponseRegister(true);
        try {
            const response = await authenticationAPI.registerUser(user);
            setResponseRegister(response);
            setLoadingResponseRegister(false);
        } catch (error) {
            setErrorAuth(
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            );
            setLoadingResponseRegister(false);
        }
    };

    return {
        user, errorAuth, login, createUser, responseRegister, loadingResponseRegister
    };
};

export default useAuth;
