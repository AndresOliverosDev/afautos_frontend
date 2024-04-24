import React, { useContext, useState } from "react";

const formProdContext = React.createContext(); 

export function useFormProdContext() {
    return useContext(formProdContext);
}

export function ProductProvider({ children }) {
    const [prod, setProd] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    const handleOpenForm = () => {
        setOpenForm(true);
    }

    return (
        <formProdContext.Provider value={handleOpenForm}>
            {children}
        </formProdContext.Provider>
    )
}