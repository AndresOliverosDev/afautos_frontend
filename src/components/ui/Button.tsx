import React from 'react';
import { RiLoader4Fill } from 'react-icons/ri';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'light' | 'ghost' | 'destructive';
    isLoading?: boolean;
    loadingText?: string;
    disabled?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    isLoading = false,
    loadingText,
    disabled = false,
    onClick,
    children,
    className = '',
}) => {
    const baseClasses = 'py-1.5 px-4 rounded-default flex items-center justify-center';

    const variantClasses = {
        primary: 'bg-light-brand dark:bg-dark-brand dark:text-dark-content text-light-content-inverted',
        secondary: 'bg-transparent text-blue-600 border border-light-brand dark:border-dark-brand',
        light: 'bg-gray-100 text-gray-700 border-gray-300',
        ghost: 'bg-transparent dark:text-dark-brand text-light-brand hover:bg-dark-card-muted',
        destructive: 'bg-red-600 text-white border-red-600',
    }[variant];

    const disabledClasses = disabled ? 'opacity-30 cursor-not-allowed' : '';

    const combinedClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${className}`;    

    return (
        <button
            className={`${combinedClasses} ${isLoading ? 'cursor-wait' : ''}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <>
                    <RiLoader4Fill className='animate-spin mr-2' />
                    {loadingText || "Cargando..."}
                </>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;