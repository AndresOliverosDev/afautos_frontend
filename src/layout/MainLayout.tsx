
import { Sidebar } from '../components/sidebar';
import { ReactNode } from 'react';
import React from 'react';

interface MainLayoutProps {
    children: ReactNode; // Especificar que children puede ser cualquier nodo de React
}
const user = {
    "names":"Andres",
    "lastName":"Oliveros",
    "position": "Administrador"
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className='h-full flex flex-col lg:flex-row gap-3 w-full'>
            <Sidebar user={user} />
            {children}
        </div>
    );
};

export default MainLayout;