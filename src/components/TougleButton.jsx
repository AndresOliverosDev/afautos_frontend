import { useEffect,useState } from "react";

const TougleButton = () => {

    const [theme,setTheme] = useState('dark');
    
    /*Funcion controladora de eventos para el cambio de tema*/
    const handleChangeTheme = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    };
    /* Cambio de tema de acuerdo al estado del tougle*/
    useEffect(() => {
        if (theme == 'dark') {
            document.querySelector('html').classList.add('dark')
        } else {
                document.querySelector('html').classList.remove('dark')
            }
    }, [theme]);

    return (
        <button
        onClick={handleChangeTheme}
        title="Boton de cambio de tema" 
        className="
            w-28 
            h-6 
            rounded-full 
            p-1
            bg-dBackground
            dark:bg-gray-600 
            relative 
            transition-colors 
            duration-500 
            ease-in
            focus:outline-none 
            focus:ring-2 
            focus:ring-lContrast
            dark:focus:ring-dContrastSec 
            focus:border-transparent
        ">
        <div id="toggle"
            className="
                rounded-full 
                text-xs
                text-lTextPri
                w-14 
                h-4
                bg-lBackground
                dark:lBackground 
                relative 
                ml-0
                dark:ml-12
                pointer-events-none 
                transition-all 
                duration-300 
                ease-out
            ">
                {theme == 'dark' ? 'Oscuro' : 'Claro'}
        </div>
        </button>
    )
};

export default TougleButton;