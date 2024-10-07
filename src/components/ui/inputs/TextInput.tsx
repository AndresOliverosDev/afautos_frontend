import React from "react";
import { forwardRef, useState, InputHTMLAttributes } from "react";

// Define las propiedades que tu componente acepta
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: any;          // Indica si hay un error
    errorMessage?: any;    // Mensaje de error a mostrar
    label?: string;           // Etiqueta del input
    icon?: JSX.Element;       // Icono a mostrar en el input
}

// Utiliza forwardRef para permitir el uso de referencias en el input
const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ error, errorMessage, label, icon, ...props }, ref) => {
    const [focus, setFocus] = useState(false);

    const handleFocus = () => {
        setFocus(!focus);
    };

    const styleFocus = "dark:border-dark-brand border-light-brand";
    const styleError = "border-light-content-error dark:border-dark-content-error";
    const styleDefault = "border-light-border dark:border-dark-border";

    return (
        <div className="w-full flex flex-col gap-1">
            {label && <p className="pl-2">{label}</p>}
            <div className="flex items-center gap-3">
                {icon && (
                    <div className={`${focus ? "dark:text-dark-brand text-light-brand" : error ? "dark:text-dark-content-error text-light-content-error" : "dark:text-dark-content text-light-content"}`}>
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    className={`bg-transparent p-2 rounded-default w-full placeholder:text-gray-500 border ${focus ? styleFocus : error ? styleError : styleDefault}`}
                    {...props}
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                />
            </div>
            {error && <p className="pl-2 text-sm text-dark-content-error">{errorMessage}</p>}
        </div>
    );
});

// Especifica el nombre del display para facilitar la depuración
TextInput.displayName = "TextInput";

export default TextInput;
