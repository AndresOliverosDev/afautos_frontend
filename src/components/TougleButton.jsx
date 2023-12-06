import { useEffect,useState } from "react";

const TougleButton = () => {

    const [theme,setTheme] = useState('light');
    
    const handleChangeTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    };

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
        title="Boton de cambio de estado" 
        className="
            w-12 
            h-6 
            rounded-full 
            p-1 
            bg-gray-400 
            dark:bg-gray-600 
            relative 
            transition-colors 
            duration-500 
            ease-in
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-700 
            dark:focus:ring-blue-600 
            focus:border-transparent
        ">
        <div id="toggle"
            className="
                rounded-full 
                w-4 
                h-4 
                bg-blue-600 
                dark:bg-blue-500 
                relative 
                ml-0 
                dark:ml-6 
                pointer-events-none 
                transition-all 
                duration-300 
                ease-out
            ">
        </div>
        </button>
    )
};

export default TougleButton;