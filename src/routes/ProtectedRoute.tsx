import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { getRolesFromToken } from "../services/authentication/jwtDecode";

interface ProtectedRouteProps {
    allowedRoles: string[];
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
    const roles = getRolesFromToken();

    // Si no hay roles, redirigir al login
    if (!roles || roles.length === 0) {
        return <Navigate to="/login" />;
    }
    
    // Verificar si el usuario tiene acceso
    const canAccess = allowedRoles.some((role) => roles.includes(role));

    return canAccess ? (
        <>{children}</> // Devuelve los hijos si tiene acceso
    ) : (
        <Navigate to="/unauthorized" /> // Redirigir si no tiene acceso
    );
};

export default ProtectedRoute;
