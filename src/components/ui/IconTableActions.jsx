/** React Icons */
import { Icon } from "@tremor/react";
import { RiFileSearchLine , RiDeleteBin7Line, RiEditBoxLine } from "react-icons/ri";

const IconTableActions = ({ rowData, onDeleteClick }) => {
  const twStyles = "cursor-pointer"
  const handleDelete = () => {
    onDeleteClick(rowData.id); // Llama a la función onDeleteClick con el ID de la fila como argumento
  };
  
  return (
    <span className="flex gap-2">
      <Icon icon={RiDeleteBin7Line} className={twStyles} variant="shadow" tooltip="Eliminar" size="xs" onClick={handleDelete}/>
      <Icon icon={RiEditBoxLine } className={twStyles} variant="shadow" tooltip="Editar" size="xs" />
      <Icon icon={RiFileSearchLine  } className={twStyles} variant="shadow" tooltip="Detalles" size="xs" />
    </span>
  );
};
export default IconTableActions;
