const Input = ({twStyles,...props}) => {
    return (
        <input className={`${twStyles} dark:text-white rounded-md transition-all duration-200 dark:bg-white dark:bg-opacity-5 py-1 px-2 dark:focus:bg-opacity-10`} {...props}/>
    );
}

export default Input;