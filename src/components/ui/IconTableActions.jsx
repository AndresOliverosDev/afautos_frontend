/** React Icons */
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

const IconTableActions = () => {
  return (
    <span className="flex gap-2">
      <RiEditLine className="h-5 w-5 cursor-pointer text-green-600" />
      <RiDeleteBinLine className="h-5 w-5 cursor-pointer text-red-300" />
    </span>
  );
};
export default IconTableActions;
