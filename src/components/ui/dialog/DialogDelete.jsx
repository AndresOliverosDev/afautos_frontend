import { Button, Dialog, DialogPanel, Icon } from "@tremor/react";
import { useState } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";

const DialogDelete = ({ nameObject, deleteAPI }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmedDelete, setConfirmedDelete] = useState(true);

    const handleDelete = () => {
            setConfirmedDelete(false);
            deleteAPI();
    };

    const handleClose = () => {
        setIsOpen(false);
        setConfirmedDelete(false);
    };
    const nameType = "Producto"

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <Icon icon={RiDeleteBin7Line} variant="shadow" tooltip="Eliminar" size="xs" />
            </button>
            <Dialog open={isOpen} onClose={handleClose} static={true}>
                <DialogPanel>
                    {!confirmedDelete ? (
                        <>
                            <h3 className="text-lg text-center font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Confirmar Eliminación</h3>
                            <p className="text-center mb-4 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                "{nameObject}"
                            </p>
                            <div className="flex justify-center gap-6">
                                <Button onClick={handleClose} className="px-10" variant="secondary">Cancelar</Button>
                                <Button onClick={handleDelete} className="px-10" color="red">Eliminar</Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">Eliminación exitosa</h3>
                            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                                El {nameType} a sido eliminado
                            </p>
                            <div className="flex justify-end mt-8">
                                <Button onClick={handleClose}>Cerrar</Button>
                            </div>
                        </>
                    )}
                </DialogPanel>
            </Dialog>
        </>
    );
}

export default DialogDelete;
