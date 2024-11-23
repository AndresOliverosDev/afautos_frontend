import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, NumberInput, SearchSelect, SearchSelectItem, Textarea } from "@tremor/react";
import { useForm } from "react-hook-form";
import { Button, DialogMessage, TextInput } from "../../../components/ui";
import { Brand, BrandCreate } from "../../../types";
import useBrand from "../hooks/useBrand";

interface BrandFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Brand | null;
}

const BrandForm: React.FC<BrandFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<BrandCreate>();
    const { createBrand, updateBrand, errorBrand, loadingBrand } = useBrand();

    useEffect(() => {
        if (dataUpdate) {
            reset({
                name: dataUpdate.name,
            });
        } else {
            reset({
                name: "",
            });
        }
    }, [dataUpdate]);

    const onSubmit = async (brand: BrandCreate) => {
        if (dataUpdate) {
            await updateBrand(brand, dataUpdate.id);
        } else {
            await createBrand(brand);
        }

        if (!errorBrand?.message) {
            reset();
            setMessageIsOpen(true);
            onClose();
        } else {
            setMessageIsOpen(true);
        }
    };

    const handleOpenMessage = (): void => {
        setMessageIsOpen((prevState) => !prevState);
    };

    const renderContent = () => (
        <>
            {messageIsOpen ? (
                <DialogMessage
                    onClose={handleOpenMessage}
                    isOpen={messageIsOpen}
                    codeError={errorBrand?.statusCode}
                    message={
                        errorBrand?.message
                            ? errorBrand?.message
                            : dataUpdate
                                ? "La marca se actualizó exitosamente"
                                : "La marca se creó exitosamente"
                    }
                />
            ) : (
                <Dialog open={isOpen} onClose={onClose}>
                    <DialogPanel className="flex flex-col gap-5">
                        <p className="text-xl border-b-4 border-tremor-brand pb-2">
                            {dataUpdate ? "ACTUALIZAR MARCA" : "CREAR MARCA"}
                        </p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <TextInput
                                label="Nombre"
                                placeholder="Nombre de la marca"
                                id="name"
                                error={errors.name}
                                errorMessage={errors.name?.message}
                                {...register("name", {
                                    required: "¡Este campo es requerido!",
                                    maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                })}
                            />
                            <Button type="submit" variant="primary" isLoading={loadingBrand}>
                                {dataUpdate ? "Actualizar marca" : "Crear marca"}
                            </Button>
                        </form>
                    </DialogPanel>
                </Dialog>
            )}
        </>
    );

    return renderContent();
};

export default BrandForm;