import { Dialog, DialogPanel } from "@tremor/react";
import React from "react";
import { RiCheckFill, RiCheckLine } from "react-icons/ri";

interface DialogMessageProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
    codeError?: number;
}

const DialogMessage: React.FC<DialogMessageProps> = ({ isOpen, onClose, message, codeError }) => {
    return (
        <Dialog onClose={onClose} open={isOpen}>
            <DialogPanel className="max-w-2xl">
                <div className="flex gap-8 px-2">
                    {
                        codeError ?
                            <div className="rounded-full shadow-md shadow-dark-content-error min-w-32 h-32 w-32 items-center justify-center flex flex-col gap-1 my-auto">
                                <p className="text-metric text-dark-content-error font-bold">{codeError}</p>
                                <p>Código error</p>
                            </div>
                            :
                            <div className="rounded-full shadow-md shadow-light-content-success dark:shadow-dark-content-success min-w-32 h-32 w-32 items-center justify-center flex flex-col gap-1 my-auto">
                                <RiCheckLine className="h-20 w-20 dark:text-dark-content-success text-light-content-success" />
                            </div>
                    }
                    <div className="text-balance my-auto">
                        <p>
                            {message}
                        </p>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    );
}

export default DialogMessage;