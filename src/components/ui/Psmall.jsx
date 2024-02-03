const Psmall = ({ props, text, styles }) => {
  return (
    <p className={`mx-4 text-left text-xs font-normal ${styles}`} {...props}>
      {text}
    </p>
  );
};
export default Psmall;
