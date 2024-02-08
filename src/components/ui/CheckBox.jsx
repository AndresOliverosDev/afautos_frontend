const CheckBox = ({text,name}) => {
    return (
        <label className="flex gap-2 items-center text-gray-400" htmlFor={name}>
            <input type="checkbox" id={name} name={name} />
            {text}
        </label>
    );
}

export default CheckBox
    ;