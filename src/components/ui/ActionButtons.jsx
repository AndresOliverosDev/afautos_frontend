import { Icon } from "@tremor/react";
import { RiEditBoxLine, RiFileSearchLine, RiDeleteBin3Line } from "react-icons/ri";

const ActionButtons = ({ editAction, detailsAction, deleteAction }) => {
    return (
        <span className="flex gap-2 cursor-pointer">
            {editAction && (
                <Icon 
                    icon={RiEditBoxLine} 
                    variant="shadow" 
                    tooltip="Editar" 
                    size="xs" 
                    onClick={editAction} 
                />
            )}
            {detailsAction && (
                <Icon 
                    icon={RiFileSearchLine} 
                    variant="shadow" 
                    tooltip="Detalles" 
                    size="xs" 
                    onClick={detailsAction} 
                />
            )}
            {deleteAction && (
                <Icon 
                    icon={RiDeleteBin3Line} 
                    variant="shadow" 
                    tooltip="Eliminar" 
                    size="xs" 
                    onClick={deleteAction} 
                />
            )}
        </span>
    );
}

export default ActionButtons;
