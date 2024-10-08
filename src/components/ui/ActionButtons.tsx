import { Icon } from "@tremor/react";
import React from "react";
import { RiEditBoxLine, RiFileSearchLine, RiDeleteBin3Line } from "react-icons/ri";

interface ActionButtonsProps {
    editAction?: () => void;
    detailsAction?: () => void;
    deleteAction?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
    editAction,
    detailsAction,
    deleteAction,
}) => {
    return (
        <span className="flex gap-2 cursor-pointer justify-end pr-2">
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
