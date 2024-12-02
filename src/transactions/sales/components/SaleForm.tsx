import React, { useState } from "react";
import { TextInput, Button, DialogMessage, SearchSelect } from "../../../components/ui";
import { useForm } from "react-hook-form";
import { Sale, SaleCreateDTO, SaleDetailCreateDTO } from '../../../types/transactions/sale';
import useSale from "../hooks/useSale";
import ProductItem from "./ProductItem";
import AddProductsCart, { ProductWithQuantity } from "./AddProductsCart";
import { Dialog, DialogPanel } from "@tremor/react";
import useCustomer from "../../../users/customers/hooks/useCustomer";

interface SaleFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Sale | null;
}

const SaleForm: React.FC<SaleFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const { register, handleSubmit, setValue, watch, formState: { errors }, reset } = useForm<SaleCreateDTO>();
    const [selectedProducts, setSelectedProducts] = useState<ProductWithQuantity[]>([]);
    const [selectedCustomer, setSelectedCustomer] = useState<string>('');
    const { errorSale, loadingSale, createSale, updateSale } = useSale();
    const { customers, errorCustomers, loadingCustomers } = useCustomer();

    const handleCloseModal = () => {
        setModalIsOpen(!modalIsOpen);
    };

    const handleAddProducts = (products: ProductWithQuantity[]): void => {
        setSelectedProducts((prevState) => {
            const updatedProducts = [...prevState];

            products.forEach((newProduct) => {
                const existingProduct = updatedProducts.find((product) => product.id === newProduct.id);
                if (existingProduct) {
                    existingProduct.quantityCart += newProduct.quantityCart;
                } else {
                    updatedProducts.push(newProduct);
                }
            });

            return updatedProducts;
        });
    };

    const handleQuantityChange = (productId: number, quantity: number): void => {
        setSelectedProducts((prevState) =>
            prevState.map((product) =>
                product.id === productId ? { ...product, quantityCart: quantity } : product
            )
        );
    };

    const onSubmit = async (saleData: SaleCreateDTO) => {
        // Asegúrate de que los detalles de la venta estén correctamente formateados
        const saleDetails: SaleDetailCreateDTO[] = selectedProducts.map((product) => ({
            productId: product.id,
            quantity: product.quantityCart,
        }));

        const salePayload: SaleCreateDTO = {
            sale: {
                payMethod: saleData.sale.payMethod,
                customer: saleData.sale.customer,
                address: saleData.sale.address,
            },
            saleDetail: saleDetails,
        };

        if (dataUpdate) {
            await updateSale(salePayload, dataUpdate.id);
        } else {
            await createSale(salePayload);
        }

        if (!errorSale?.message) {
            reset();
            setMessageIsOpen(true);
            onClose();
        } else {
            setMessageIsOpen(true);
        }
    };

    const renderContent = () => (
        <>
            {messageIsOpen ? (
                <DialogMessage
                    onClose={handleCloseModal}
                    isOpen={modalIsOpen}
                    codeError={errorSale?.statusCode}
                    message={errorSale?.message || (dataUpdate ? "Venta actualizada" : "Venta creada")}
                />
            ) : (
                <Dialog open={isOpen} onClose={onClose}>
                    <DialogPanel className="flex flex-col gap-5 min-w-[95%]">
                        <p className="text-xl border-b-4 border-tremor-brand pb-2">
                            {dataUpdate ? "ACTUALIZAR VENTA" : "CREAR VENTA"}
                        </p>
                        <div className="flex gap-4 w-full flex-col md:flex-row">
                            <form className="flex flex-col gap-2 w-full md:w-[40%]" onSubmit={handleSubmit(onSubmit)}>
                                <SearchSelect
                                    data={customers || []}
                                    labelKey="name"
                                    idKey="id"
                                    loadingData={loadingCustomers}
                                    label="Seleccionar cliente"
                                    onValueChange={(customer: { id: string; }) => setValue("sale.customer", customer.id)} // Notificar el cambio
                                />

                                <TextInput
                                    label="Método de pago"
                                    placeholder="Métodos de pago"
                                    id="payMethod"
                                    error={errors.sale?.payMethod}
                                    errorMessage={errors.sale?.payMethod?.message}
                                    {...register("sale.payMethod", {
                                        required: "¡Este campo es requerido!",
                                    })}
                                />
                                <TextInput
                                    label="Dirección"
                                    placeholder="Dirección de envió"
                                    id="address"
                                    error={errors.sale?.address}
                                    errorMessage={errors.sale?.address?.message}
                                    {...register("sale.address", {
                                        required: "¡Este campo es requerido!",
                                        maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                    })}
                                />
                                <Button type="submit" isLoading={loadingSale}>
                                    {dataUpdate ? "Actualizar venta" : "Crear venta"}
                                </Button>
                            </form>
                            <div className="flex flex-col justify-center items-center rounded-default gap-2 w-full md:w-[60%] mt-2 p-2 border border-dark-border">
                                <p className="font-bold text-lg">Productos seleccionados</p>
                                {selectedProducts.length > 0 ? (
                                    <div className="max-h-[400px] overflow-y-auto w-full ">
                                        <ProductItem
                                            products={selectedProducts}
                                            handleQuantityChange={handleQuantityChange}
                                        />
                                    </div>
                                ) : (
                                    <div>No hay productos seleccionados.</div>
                                )}
                                <div className="pt-5 w-full">
                                    <Button
                                        className="ml-auto mr-4"
                                        onClick={handleCloseModal}
                                        type="button"
                                    >
                                        Agregar productos
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                    <AddProductsCart
                        isOpen={modalIsOpen}
                        onClose={handleCloseModal}
                        onAddSelected={handleAddProducts}
                        selectedProductsAfter={selectedProducts}
                    />
                </Dialog>
            )}
        </>
    );

    return renderContent();
};

export default SaleForm;