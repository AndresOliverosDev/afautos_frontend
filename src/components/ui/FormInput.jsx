const FormInput = ({ icon: Icon, ...props }) => {
    return (
        <div className="flex items-center relative">
            {Icon && <Icon className="text-gray-300 w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />}
            <input
                className='border-solid border border-red-900 focus:border-color-primary-dark bg-gray-600 rounded-md py-2 px-11 text-gray-200'
                {...props}
            />
        </div>
    );
}

export default FormInput;
