import { useState } from "react";

const FormInput = ({ icon: Icon, ...props }) => {
  const [focus, setFocus] = useState(false);
  const handleFocus = () => {
    setFocus((prevState) => !prevState);
  };
  return (
    <div
      onFocus={handleFocus}
      onBlur={handleFocus}
      className="relative flex items-center"
    >
      {Icon && (
        <Icon
          className={`transition-all duration-300 ${focus ? "text-color-primary-light" : "text-gray-300"}  absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 transform`}
        />
      )}
      <input
        className="rounded-md border border-black border-opacity-0 bg-black bg-opacity-60 px-11 py-2 text-gray-200 transition-all duration-500 focus:border-color-primary-dark"
        {...props}
      />
    </div>
  );
};

export default FormInput;
