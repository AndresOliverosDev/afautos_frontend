import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel, NumberInput, SearchSelect, SearchSelectItem, Textarea } from "@tremor/react";
import { useForm } from "react-hook-form";
import { Button, DialogMessage, TextInput } from "../../../components/ui";
import { Product, ProductCreate } from "../../../types";
import useProduct from "../hooks/useProduct";
import useCategory from "../../category/hooks/useCategory";
import useBrand from "../../brand/hooks/useBrand";

interface ProductFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Product | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);

    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<ProductCreate>();
    const { createProduct, updateProduct, errorProduct, loadingProduct } = useProduct();
    const { categories } = useCategory();
    const { brands } = useBrand();

    useEffect(() => {
        if (dataUpdate) {
            reset({
                name: dataUpdate.name,
                desc: dataUpdate.desc,
                quantity: dataUpdate.quantity,
                price: dataUpdate.price,
                image: dataUpdate.image,
                category: categories.filter((category) => category.name === dataUpdate.category)[0].id,
                brand: brands.filter((brand) => brand.name === dataUpdate.brand)[0].id
            });
        } else {
            reset({
                name: "",
                desc: "",
                quantity: 0,
                price: 0,
                image: "",
                category: undefined,
                brand: undefined
            });
        }
    }, [dataUpdate]);

    const onSubmit = async (product: ProductCreate) => {
        if (dataUpdate) {
            updateProduct(product, dataUpdate.id);
        } else {
            createProduct(product);
        }

        if (!errorProduct?.message) {
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

    const handleChangeBrand = (value: any) => setValue("brand", value);
    const handleChangeCat = (value: any) => setValue("category", value);

    const renderContent = () => (
        <>
            {messageIsOpen ? (
                <DialogMessage
                    onClose={handleOpenMessage}
                    isOpen={messageIsOpen}
                    codeError={errorProduct?.statusCode}
                    message={
                        errorProduct?.message
                            ? errorProduct?.message
                            : dataUpdate
                                ? "El producto se actualizó exitosamente"
                                : "El producto se creó exitosamente"
                    }
                />
            ) : (
                <Dialog open={isOpen} onClose={onClose}>
                    <DialogPanel className="flex flex-col gap-5">
                        <p className="text-xl border-b-4 border-tremor-brand pb-2">
                            {dataUpdate ? "ACTUALIZAR PRODUCTO" : "CREAR PRODUCTO"}
                        </p>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <TextInput
                                label="Nombre"
                                placeholder="Nombre del producto"
                                id="name"
                                error={errors.name}
                                errorMessage={errors.name?.message}
                                {...register("name", {
                                    required: "¡Este campo es requerido!",
                                    maxLength: { value: 30, message: "¡La longitud máxima es de 30 caracteres!" },
                                })}
                            />
                            <Textarea
                                placeholder="Descripción del producto"
                                id="desc"
                                error={errors.desc}
                                errorMessage={errors.desc?.message}
                                {...register("desc", {
                                    maxLength: { value: 255, message: "Máximo 255 caracteres" },
                                })}
                            />
                            <NumberInput
                                id="quantity"
                                error={errors.quantity}
                                errorMessage={errors.quantity?.message}
                                {...register("quantity", {
                                    required: "¡Este campo es requerido!",
                                    max: { value: 32000, message: "La cantidad máxima es 32,000" },
                                })}
                            />
                            <NumberInput
                                id="price"
                                error={errors.price}
                                errorMessage={errors.price?.message}
                                {...register("price", {
                                    required: "¡Este campo es requerido!",
                                    max: { value: 9999999999, message: "El precio superó la cantidad máxima" },
                                })}
                            />
                            <TextInput
                                label="Imagen"
                                placeholder="URL de la imagen"
                                id="image"
                                error={errors.image}
                                errorMessage={errors.image?.message}
                                {...register("image", {
                                    maxLength: { value: 255, message: "Máximo 255 caracteres" },
                                })}
                            />
                            <SearchSelect
                                defaultValue={dataUpdate ? dataUpdate.category : ""}
                                onValueChange={handleChangeCat}>
                                {categories.map((cat) => (
                                    <SearchSelectItem key={cat.id} value={cat.id}>
                                        {cat.name}
                                    </SearchSelectItem>
                                ))}
                            </SearchSelect>
                            <SearchSelect
                                onValueChange={handleChangeBrand}>
                                {brands.map((brand) => (
                                    <SearchSelectItem key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </SearchSelectItem>
                                ))}
                            </SearchSelect>
                            <Button type="submit" variant="primary" isLoading={loadingProduct}>
                                {dataUpdate ? "Actualizar Producto" : "Crear Producto"}
                            </Button>
                        </form>
                    </DialogPanel>
                </Dialog>
            )}
        </>
    );

    return renderContent();
};

export default ProductForm;