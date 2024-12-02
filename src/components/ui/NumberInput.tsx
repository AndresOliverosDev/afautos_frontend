import React from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import Button from "./Button";

interface NumberInputProps {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
    className?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min = 0, max = Infinity, className }) => {
    const handleDecrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    const handleIncrement = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Permitir temporalmente un valor vacío
        if (inputValue === "") {
            onChange(min); // El valor temporal es mínimo mientras se edita
            return;
        }

        // Validar que el input solo contenga números
        if (/^\d*$/.test(inputValue)) {
            const parsedValue = parseInt(inputValue, 10);

            // Validar los límites min y max
            if (parsedValue >= min && parsedValue <= max) {
                onChange(parsedValue);
            } else if (parsedValue > max) {
                onChange(max);
            } else if (parsedValue < min) {
                onChange(min);
            }
        }
    };

    const handleInputBlur = () => {
        // Asegurarse de que el valor siempre esté dentro de los límites después de editar
        if (value < min) {
            onChange(min);
        } else if (value > max) {
            onChange(max);
        }
    };

    return (
        <div className={`flex items-center ${className}`}>
            <Button className="rounded-r-none" onClick={handleDecrement} disabled={value <= min}>
                <RiSubtractLine />
            </Button>
            <input
                className="w-12 text-center bg-transparent text-light-content-emphasis dark:text-dark-content-emphasis"
                type="text"
                value={value}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
            />
            <Button className="rounded-l-none" onClick={handleIncrement} disabled={value >= max}>
                <RiAddLine />
            </Button>
        </div>
    );
};

export default NumberInput;
