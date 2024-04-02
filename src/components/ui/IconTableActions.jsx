/** React Icons */
import { Icon } from "@tremor/react";
import { RiFileSearchLine , RiDeleteBin7Line, RiEditBoxLine } from "react-icons/ri";

const IconTableActions = ({ deleteOption }) => {
  const twStyles = "cursor-pointer"

  const HandleDelete = () => {
    {deleteOption}
  }
  
  return (
    <span className="flex gap-2">
      <Icon onClick={() => deleteOption} icon={RiDeleteBin7Line} className={twStyles} variant="shadow" tooltip="Eliminar" size="xs"/>
      <Icon icon={RiEditBoxLine } className={twStyles} variant="shadow" tooltip="Editar" size="xs" />
      <Icon icon={RiFileSearchLine  } className={twStyles} variant="shadow" tooltip="Detalles" size="xs" />
    </span>
  );
};
export default IconTableActions;
