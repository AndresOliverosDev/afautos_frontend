import { Button, Dialog, DialogPanel } from "@tremor/react";
import React from "react";
import { useState } from "react";

interface DialogDeleteProps {
  nameItem: string;
  isOpen: boolean;
  onClose: () => void;
  deleteAPI: () => Promise<void>;
  messages: {
    delete: string;
  };
}

const DialogDelete: React.FC<DialogDeleteProps> = ({ nameItem, isOpen, onClose, deleteAPI, messages }) => {
  const [confirmedDelete, setConfirmedDelete] = useState(false);

  const handleDelete = async () => {
    await deleteAPI();
    setConfirmedDelete(true);
  };

  const handleClose = () => {
    setConfirmedDelete(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} static={true}>
      <DialogPanel>
        {!confirmedDelete ? (
          <>
            <h3 className="text-lg text-center font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Confirmar Eliminación
            </h3>
            <p className="text-center mb-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              "{nameItem}"
            </p>
            <div className="flex justify-center gap-6">
              <Button onClick={handleClose} className="px-10" variant="secondary">
                Cancelar
              </Button>
              <Button onClick={handleDelete} className="px-10" color="red">
                Eliminar
              </Button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {messages.delete}
            </h3>
            <div className="flex justify-end mt-8">
              <Button onClick={handleClose}>Cerrar</Button>
            </div>
          </>
        )}
      </DialogPanel>
    </Dialog>
  );
};

export default DialogDelete;