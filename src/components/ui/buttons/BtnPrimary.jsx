const BtnPrimary = ({ twStyles, text, ...props }) => {
  return (
    <button {...props} className= {`${twStyles} rounded-md dark:bg-color-primary-dark py-1 px-3 text-sm dark:text-gray-400 dark:hover:bg-color-hover-dark`}>
      {text}
    </button>
  );
};

export default BtnPrimary;
