import { useEffect, useState } from "react";

/** React Icons */
import { RiSunLine, RiMoonLine } from "react-icons/ri";

const ToggleButton = () => {
  const [theme, setTheme] = useState("dark");

  /*Función controladora de eventos para el cambio de tema*/
  const handleChangeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  /* Cambio de tema de acuerdo al estado del toggle*/
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
      title="Botón de cambio de tema"
      className="
            focus:ring-lContrast 
            dark:focus:ring-dContrastSec 
            relative 
            h-6
            w-12
            rounded-full
            bg-bg-light 
            transition-colors 
            duration-500
            ease-in 
            focus:border-transparent 
            focus:outline-none
            focus:ring-2 
            dark:bg-bg-dark
        "
    >
      <div
        id="toggle"
        className="
                text-lTextPri 
                bg-lBackground
                pointer-events-none
                relative
                flex 
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-color-primary-light
                text-xs
                transition-all
                duration-300 
                ease-out 
                dark:ml-6 
                dark:bg-color-primary-dark
            "
      >
        {theme == "dark" ? (
          <RiMoonLine className="h-4 w-4 text-blue-gray-50" />
        ) : (
          <RiSunLine className="h-4 w-4 text-yellow-700" />
        )}
      </div>
    </button>
  );
};

export default ToggleButton;
