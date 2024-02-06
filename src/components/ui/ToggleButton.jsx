import { useEffect, useState } from "react";

/** React Icons */
import { RiSunLine,RiMoonLine  } from "react-icons/ri";

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
            bg-bg-light 
            focus:ring-lContrast 
            dark:focus:ring-dContrastSec 
            relative
            h-6
            w-12
            rounded-full 
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
                dark:bg-color-primary-dark
                bg-color-primary-light
                pointer-events-none 
                relative
                flex
                items-center
                justify-center
                h-6
                w-6
                rounded-full
                text-xs
                transition-all 
                duration-300 
                ease-out 
                dark:ml-6
            "
      >
        {theme == "dark" ? <RiMoonLine className='text-blue-gray-50 w-4 h-4'/> : <RiSunLine className='text-yellow-700 w-4 h-4' />}
      </div>
    </button>
  );
};

export default ToggleButton;