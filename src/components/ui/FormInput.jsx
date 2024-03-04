import { useState } from "react";

const FormInput = ({ icon: Icon, ...props }) => {
    const [focus, setFocus] = useState(false);
    const handleFocus = ()=> {
        setFocus((prevState)=> !prevState );
    }
    return (
        <div onFocus={handleFocus} onBlur={handleFocus}  className="flex items-center relative">
            {Icon && <Icon className={`transition-all duration-300 ${focus ? 'text-color-primary-light' : 'text-gray-300'} w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2`} />}
            <input className='transition-all duration-500 border border-black border-opacity-0 focus:border-color-primary-dark bg-black bg-opacity-60 rounded-md py-2 px-11 text-gray-200'
                {...props}
            />
        </div>
    );
}

export default FormInput;
