const P = ({ props, text, styles }) => {
  return (
    <p className={`mx-4 text-left  text-sm ${styles}`} {...props}>
      {text}
    </p>
  );
};
export default P;
