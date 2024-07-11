import axios from "axios";
import { URL_API_BASE } from "../URL_API_BASE";
import apiClient from "../apiClient";

const API_URL = `${URL_API_BASE}/auth`;

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        }, {
            headers: { "Content-Type": "application/json" }
        });

        const { jwt } = response.data;

        if (jwt !== null) {
            sessionStorage.setItem("jwt", `Bearer ${jwt}`);
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};

const registerUser = async (user) => {
    try {
        console.log("Payload enviado:", JSON.stringify(user, null, 2)); // Agrega este log para verificar el payload
        const response = await apiClient.post(`${URL_API_BASE}/auth/register`, user, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const logout = () => {
    sessionStorage.removeItem("jwt");
};

export default {
    login, logout, registerUser
};
