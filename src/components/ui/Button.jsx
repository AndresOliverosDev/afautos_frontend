const Button = ({props,text}) => {
    return (
        <button 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        {...props}>
            {text}
        </button>
    )
};

export default Button;
