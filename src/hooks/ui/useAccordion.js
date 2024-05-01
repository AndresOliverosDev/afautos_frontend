import { useState } from "react";

function useAccordion() {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (accordion) => {
        setOpenAccordion((prevAccordion) => (prevAccordion === accordion ? null : accordion));
    };

    return { openAccordion, toggleAccordion };
}

export default useAccordion;
