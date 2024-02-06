/** React Icons */
import { RiEditLine, RiDeleteBinLine  } from "react-icons/ri";

const IconTableActions = () => {
    return (
        <span className="flex gap-2">
            <RiEditLine className="cursor-pointer h-5 w-5 text-green-600"/>
            <RiDeleteBinLine className="cursor-pointer h-5 w-5 text-red-300"/>
        </span>
    )
}
export default IconTableActions;