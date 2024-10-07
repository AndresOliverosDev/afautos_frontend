import React from 'react';
import { ReactNode } from 'react';

interface SingleLayoutProps {
    children: ReactNode; // Especificar que children puede ser cualquier nodo de React
}

const SingleLayout: React.FC<SingleLayoutProps> = ({ children }) => {
    return (
        <div className="h-full w-full flex">
            {children}
        </div>
    );
};

export default SingleLayout;
