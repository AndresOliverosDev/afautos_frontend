import { useState } from "react";

const TextInputIcon = ({ Icon, error, errorMessage, label, name, id, placeholder, type, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);

    // Función para obtener las clases del icono según el estado
    const getIconClass = () => {
        return error
            ? 'text-light-content-error dark:text-dark-content-error'
            : isFocused
            ? 'dark:text-dark-brand text-light-brand'
            : 'dark:text-dark-content text-light-content';
    };

    // Función para obtener el estilo de la sombra según el estado de error o focus
    const getShadowStyle = () => {
        if (error) {
            return 'shadow-lg shadow-light-content-error/50 dark:shadow-dark-content-error/20';
        }
        return isFocused
            ? 'shadow-lg shadow-light-brand/50 dark:shadow-dark-brand/20'
            : '';
    };

    const getBorderColor = () => {
        return error
            ? 'border-light-content-error dark:border-dark-content-error'
            : isFocused
            ? 'dark:border-dark-brand border-light-brand'
            : 'border-light-border dark:border-dark-border'
    }

    return (
        <div className="flex flex-col gap-0.5">
            {label && <label htmlFor={id} className="pl-1 text-default text-light-content dark:text-dark-content">{label}</label>}
            <div className={`flex rounded-xl ${getShadowStyle()}`}>
                <div className={`border-y border-l ${getBorderColor()} h-10 w-10 flex items-center justify-center rounded-s-xl ${getIconClass()}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    className={`bg-transparent border ${getBorderColor()} rounded-r-xl pl-2 w-full`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </div>
            {error && <p className="text-label pl-1 text-light-content-error dark:text-dark-content-error">{errorMessage}</p>}
        </div>
    );
};

export default TextInputIcon;
