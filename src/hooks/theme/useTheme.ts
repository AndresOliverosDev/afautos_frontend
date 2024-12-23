import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark"); // Definir el tipo como 'dark' o 'light'

    const handleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        const htmlElement = document.documentElement;
        if (newTheme === "dark") {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }
    };

    return { theme, handleTheme };
};

export default useTheme;
