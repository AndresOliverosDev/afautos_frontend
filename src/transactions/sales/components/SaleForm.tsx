import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, NumberInput, SearchSelect, SearchSelectItem, Textarea } from "@tremor/react";
import { useForm } from "react-hook-form";
import { Button, DialogMessage, TextInput } from "../../../components/ui";
import { Sale, SaleCreate } from '../../../types/transactions/sale';
import useSale from "../hooks/useSale";
import ProductItem from "./ProductItem";
import { Product } from "../../../types";

interface SaleFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Sale | null;
}

const SaleForm: React.FC<SaleFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<SaleCreate>();
    // Custom hook de las ventas
    const { errorSale, loadingSale, createSale, updateSale } = useSale();

    // useEffect(() => {
    //     if (dataUpdate) {
    //         reset({
    //             name: dataUpdate.name,
    //         });
    //     } else {
    //         reset({
    //             name: "",
    //         });
    //     }
    // }, [dataUpdate]);

    const onSubmit = async (sale: SaleCreate) => {
        if (dataUpdate) {
            await updateSale(sale, dataUpdate.id);
        } else {
            await createSale(sale);
        }

        if (!errorSale?.message) {
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

    const selectedProducts: Product[] = [
        {
            id: 8,
            name: "Pantalla LCD 27'",
            desc: "Product test",
            quantity: 12,
            price: 1200000,
            image: "https://images.pexels.com/photos/2251206/pexels-photo-2251206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "1",
            brand: "1"
        },
        {
            id: 9,
            name: "Teclado mecánico",
            desc: "b",
            quantity: 100,
            price: 150000,
            image: "https://images.pexels.com/photos/952594/pexels-photo-952594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            category: "1",
            brand: "1"
        }
    ];


    const renderContent = () => (
        <>
            {messageIsOpen ? (
                <DialogMessage
                    onClose={handleOpenMessage}
                    isOpen={messageIsOpen}
                    codeError={errorSale?.statusCode}
                    message={
                        errorSale?.message
                            ? errorSale?.message
                            : dataUpdate
                                ? "La venta se actualizó exitosamente"
                                : "La venta se creó exitosamente"
                    }
                />
            ) : (
                <Dialog open={isOpen} onClose={onClose}>
                    <DialogPanel className="flex flex-col gap-5 min-w-[95%]">
                        <p className="text-xl border-b-4 border-tremor-brand pb-2">
                            {dataUpdate ? "ACTUALIZAR VENTA" : "CREAR VENTA"}
                        </p>
                        <form className="flex gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-2 w-[40%]">
                                <TextInput
                                    label="Ciente"
                                    placeholder="Seleccionar un cliente"
                                    id="customer"
                                    error={errors.customer}
                                    errorMessage={errors.customer?.message}
                                    {
                                    ...register("customer", {
                                        required: "¡Este campo es requerido!",
                                        maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                    })}
                                />
                                <TextInput
                                    label="Método de pago"
                                    placeholder="Métodos de pago"
                                    id="payMethod"
                                    error={errors.payMethod}
                                    errorMessage={errors.payMethod?.message}
                                    {
                                    ...register("payMethod", {
                                        required: "¡Este campo es requerido!",
                                        maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                    })}
                                />
                                <TextInput
                                    label="Dirección"
                                    placeholder="Dirección de envió"
                                    id="address"
                                    error={errors.address}
                                    errorMessage={errors.address?.message}
                                    {
                                    ...register("payMethod", {
                                        required: "¡Este campo es requerido!",
                                        maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                    })}
                                />
                            </div>
                            <div className="flex flex-col rounded-default gap-2 w-[60%] mt-2 p-2 border border-dark-border">
                                    <ProductItem products={selectedProducts} />
                            </div>
                        </form>
                        <Button type="submit" variant="primary" isLoading={loadingSale}>
                            {dataUpdate ? "Actualizar marca" : "Crear marca"}
                        </Button>
                    </DialogPanel>
                </Dialog>
            )}
        </>
    );

    return renderContent();
};

export default SaleForm;