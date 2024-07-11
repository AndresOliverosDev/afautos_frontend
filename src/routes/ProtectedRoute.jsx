import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromToken } from "../services/authentication/jwtDecode";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const roles = getRolesFromToken();

    if (!roles || roles.length === 0) {
        return <Navigate to="/login" />;
    }
    
    const canAccess = allowedRoles.some((role) => roles.includes(role));

    return canAccess ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
