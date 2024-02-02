import { Button } from "@material-tailwind/react";

const BtnSecondaryUI = ({ props, text }) => {
  return (
    <button {...props}>
      <Button variant="outlined" size="sm">
        {icon}
        {text}
      </Button>
    </button>
  );
};

export default BtnSecondaryUI;
