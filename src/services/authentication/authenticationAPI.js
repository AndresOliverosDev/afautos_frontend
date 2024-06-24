import axios from "axios";
import { URL_API_BASE } from "../URL_API_BASE";

const API_URL = `${URL_API_BASE}/auth`;

const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        }, {
            headers: { "Content-Type": "application/json"}
        });

            const { jwt } = response.data;

            if (jwt !== null) {
                sessionStorage.setItem("jwt", jwt);
            }

        return response.data
    } catch (error) {
        throw error;
    }
};

const logout = () => {
    sessionStorage.removeItem("jwt");
}

export default {
    login, logout
}