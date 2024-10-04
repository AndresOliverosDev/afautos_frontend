import { forwardRef, useState } from "react";

const TextInput = forwardRef(({ error, errorMessage, label, icon, ...props }, ref) => {

    const [focus, setFocus] = useState(false)

    const handleFocus = () => {
        setFocus(!focus)
    }

    const styleFocus = "dark:border-dark-brand border-light-brand"
    const styleError = "border-light-content-error dark:border-dark-content-error"
    const styleDefault = "border-light-border dark:border-dark-border"

    return (
        <div className="w-full flex flex-col gap-1">
            {
                label &&
                <p className="pl-2">
                    {label}
                </p>
            }
            <div className="flex items-center gap-3">
                {
                    icon &&
                    <div className={`${focus ? "dark:text-dark-brand text-light-brand" : error ? "dark:text-dark-content-error text-light-content-error" : "dark:text-dark-content text-light-content"}`}>
                        {icon}
                    </div>
                }
                <input
                    ref={ref}
                    className={`bg-transparent p-2 rounded-default w-full placeholder:text-gray-500 border ${focus ? styleFocus : error ? styleError : styleDefault}`}
                    {...props}
                    onBlur={handleFocus}
                    onFocus={handleFocus}
                />
            </div>
            {
                error &&
                <p className="pl-2 text-sm text-dark-content-error">
                    {errorMessage}
                </p>
            }
        </div>
    );
})

export default TextInput;