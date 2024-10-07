import React, { createContext, useContext, useState, ReactNode } from "react";

// Define el contexto
const formProdContext = createContext<{
    handleOpenForm: () => void;
} | undefined>(undefined);

// Hook personalizado para usar el contexto
export function useFormProdContext() {
    const context = useContext(formProdContext);
    if (!context) {
        throw new Error("useFormProdContext debe ser utilizado dentro de un ProductProvider");
    }
    return context;
}

// Propiedades del ProductProvider
interface ProductProviderProps {
    children: ReactNode; // Los hijos pueden ser cualquier nodo React
}

export function ProductProvider({ children }: ProductProviderProps) {
    const [prod, setProd] = useState<any>(null); // Define el tipo adecuado para 'prod' según tu lógica
    const [openForm, setOpenForm] = useState<boolean>(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    return (
        <formProdContext.Provider value={{ handleOpenForm }}>
            {children}
        </formProdContext.Provider>
    );
}
