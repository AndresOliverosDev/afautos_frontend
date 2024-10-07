import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    authorities: string;
}

const getToken = (): string | null => {
    const tokenWithBearer = sessionStorage.getItem('jwt');
    if (tokenWithBearer && tokenWithBearer.startsWith('Bearer ')) {
        return tokenWithBearer.split(' ')[1];
    }
    return null;
};

const getRolesFromToken = (): string[] => {
    const token = getToken();
    if (token) {
        try {
            const decodedToken = jwtDecode<DecodedToken>(token);
            return decodedToken.authorities.split(',');
        } catch (error) {
            console.error('Error decoding token:', (error as Error).message);
            return [];
        }
    } else {
        return [];
    }
};

export { getToken, getRolesFromToken };