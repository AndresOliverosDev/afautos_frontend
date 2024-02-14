const CheckBox = ({ text, name }) => {
  return (
    <label className="flex items-center gap-2 text-gray-400" htmlFor={name}>
      <input type="checkbox" id={name} name={name} />
      {text}
    </label>
  );
};

export default CheckBox;
