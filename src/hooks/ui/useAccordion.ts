import { useState } from "react";

function useAccordion() {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null); // Tipar como string o null

    const toggleAccordion = (accordion: string) => {
        setOpenAccordion((prevAccordion) => (prevAccordion === accordion ? null : accordion));
    };

    return { openAccordion, toggleAccordion };
}

export default useAccordion;
