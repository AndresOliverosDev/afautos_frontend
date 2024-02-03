import { useEffect, useState } from "react";

const TougleButton = () => {
  const [theme, setTheme] = useState("dark");

  /*Funcion controladora de eventos para el cambio de tema*/
  const handleChangeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  /* Cambio de tema de acuerdo al estado del tougle*/
  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      onClick={handleChangeTheme}
      title="Boton de cambio de tema"
      className="
            bg-dBackground 
            focus:ring-lContrast 
            dark:focus:ring-dContrastSec 
            relative
            h-6
            w-28 
            rounded-full 
            p-1 
            transition-colors 
            duration-500
            ease-in 
            focus:border-transparent 
            focus:outline-none
            focus:ring-2 
            dark:bg-gray-600
        "
    >
      <div
        id="toggle"
        className="
                text-lTextPri 
                bg-lBackground
                dark:lBackground
                pointer-events-none 
                relative
                ml-0
                h-4 
                w-14 
                rounded-full
                text-xs
                transition-all 
                duration-300 
                ease-out 
                dark:ml-12
            "
      >
        {theme == "dark" ? "Oscuro" : "Claro"}
      </div>
    </button>
  );
};

export default TougleButton;
