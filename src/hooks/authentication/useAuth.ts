import { useState } from "react";
import authenticationAPI from "../../services/authentication/authenticationAPI";
import { ErrorResult, Register } from "../../types";

const useAuth = () => {
    const [dataUser, setDataUser] = useState<any>(null);
    const [errorAuth, setErrorAuth] = useState<ErrorResult | null>(null);
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

    const login = async (username: string, password: string): Promise<any> => {
        setLoadingAuth(false)
        setErrorAuth(null)
        try {
            const data = await authenticationAPI.login(username, password);
            setDataUser(data);
            setErrorAuth(null);
            return data;
        } catch (error) {
            setErrorAuth(error as ErrorResult)
        } finally {
            setLoadingAuth(false);
        }
    };

    const createUser = async (userData: Register): Promise<void> => {
        setLoadingAuth(true);
        try {
            const response = await authenticationAPI.registerUser(userData);
            return(response);
        } catch (error) {
            setErrorAuth(error as ErrorResult)
        } finally {
            setLoadingAuth(false);
        }
    };

    return {
        dataUser,
        errorAuth,
        login,
        createUser,
        loadingAuth
    };
};

export default useAuth;