import { Button, Dialog, DialogPanel } from "@tremor/react";
import React, { useState } from "react";
import DialogMessage from "./DialogMessage";

interface DialogDeleteProps {
  nameItem: string | number;
  isOpen: boolean;
  onClose: () => void;
  handleDelete: () => void;
  message: string;
  codeError?: number;
  nameModule?: string; 
}

const DialogDelete: React.FC<DialogDeleteProps> = ({
  nameItem,
  isOpen,
  onClose,
  handleDelete,
  message,
  codeError,
  nameModule
}) => {
  const [confirmedDelete, setConfirmedDelete] = useState<boolean>(false);

  const handleDeleteButton = () => {
    handleDelete();
    setConfirmedDelete(true);
  };

  const handleClose = () => {
    setConfirmedDelete(false);
  };

  return (
    !confirmedDelete ? (
      <Dialog open={isOpen} onClose={onClose} static>
        <DialogPanel className="p-6">
          <h3 className="text-lg text-center font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Confirmar Eliminación
          </h3>
          <p className="text-center mb-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            ¿Estás seguro de eliminar la {nameModule || "categoría"} "{nameItem}"?
          </p>
          <div className="flex justify-center gap-6">
            <Button onClick={onClose} variant="secondary">
              Cancelar
            </Button>
            <Button onClick={handleDeleteButton} color="red">
              Eliminar
            </Button>
          </div>
        </DialogPanel>
      </Dialog>
    ) : (
      <DialogMessage isOpen={confirmedDelete} onClose={handleClose} message={message} codeError={codeError} />
    )
  );
};

export default DialogDelete;