import {jwtDecode} from 'jwt-decode';

const getToken = () => {
    const tokenWithBearer = sessionStorage.getItem('jwt');
    if (tokenWithBearer && tokenWithBearer.startsWith('Bearer ')) {
        return tokenWithBearer.split(' ')[1];
    }
    return null;
};

const getRolesFromToken = () => {
    const token = getToken();
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            return decodedToken.authorities.split(',');
        } catch (error) {
            console.error('Error decoding token:', error.message);
            return [];
        }
    } else {
        return [];
    }
};

export { getToken, getRolesFromToken };