const BtnPrimaryUI = ({ text, icon, ...props }) => {
  return (
    <button {...props}>
      <Button className="flex items-center gap-3" size="sm">
        {icon}
        {text}
      </Button>
    </button>
  );
};
export default BtnPrimaryUI;
