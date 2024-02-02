const Psmall = ({ props, text, styles }) => {
  return (
    <p className={`mx-4 text-xs font-normal text-left ${styles}`} {...props}>
      {text}
    </p>
  );
};
export default Psmall;
