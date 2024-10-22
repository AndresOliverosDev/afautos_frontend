import { Dialog, DialogPanel, Textarea } from "@tremor/react";
import { useForm } from "react-hook-form";
import useCategory from "../../../products/category/hooks/useCategory";
import { useEffect, useState } from "react";
import { Category, CreateCategory } from "../../../types";
import React from "react";
import { Button, DialogMessage, TextInput } from "../../../components/ui";

interface CategoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Category | null;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    // Estados
    const [messageIsOpen, setMessageIsOpen] = useState<boolean>(false);
    
    // Hook del formulario
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateCategory>();
    
    // Custom hook para manejar las categorías
    const { createCategory, updateCategory, errorCategory, loadingCategory } = useCategory();
    // Verificar si el formulario tiene datos de actualización
    useEffect(() => {
        if (dataUpdate) {
            reset({ name: dataUpdate.name, description: dataUpdate.description });

        } else {
            reset({ name: "", description: "" });
        }
    }, [dataUpdate]);
    
    // Función de envío de formulario
    const onSubmit = (category: CreateCategory) => {
        if (dataUpdate) {
            updateCategory(category, dataUpdate.id);
        } else {
            createCategory(category);
        }
        // Si no hay errores, la operación fue exitosa
        if (!errorCategory?.message) {
            reset();
            setMessageIsOpen(true); // Mostrar mensaje de éxito
            onClose();  // Cerrar el formulario solo si fue exitoso
        } else {
            // Si hay un error, mostrar el mensaje pero mantener el formulario abierto
            setMessageIsOpen(true);
        }
    };

    // Función para abrir/cerrar el mensaje
    const handleOpenMessage = (): void => {
        setMessageIsOpen(prevState => !prevState);
    }

    // Contenido
    const renderContent = () => (
        <>
            {/* Mostrar mensaje de error o éxito sin cerrar el formulario */}
            {messageIsOpen ? (
                <DialogMessage 
                    onClose={handleOpenMessage} 
                    isOpen={messageIsOpen} 
                    codeError={errorCategory?.statusCode}
                    message={errorCategory?.message ?  errorCategory?.message : dataUpdate ? "La categoría se actualizo exitosamente" : "La categoría se creó exitosamente"} 
                /> )
                :
            (
            <Dialog open={isOpen} onClose={onClose}>
                <DialogPanel className="flex flex-col gap-5">
                    <p className="text-xl border-b-4 border-tremor-brand pb-2">
                        {dataUpdate ? 'ACTUALIZAR CATEGORÍA' : 'CREAR CATEGORÍA'}
                    </p>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-2">
                            <TextInput
                                label="Nombre"
                                placeholder="Nombre de la categoría"
                                id="name"
                                error={errors.name}
                                errorMessage={errors.name?.message}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "El nombre es requerido"
                                    }
                                })}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="description">Descripción:</label>
                            <Textarea
                                placeholder="Descripción de la categoría"
                                id="description"
                                error={errors.description}
                                errorMessage={errors.description?.message}
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "La descripción es requerida"
                                    }
                                })}
                            />
                        </div>
                        <Button variant="primary" type="submit" isLoading={loadingCategory}>
                            {dataUpdate ? 'Actualizar Categoría' : 'Crear Categoría'}
                        </Button>
                    </form>
                </DialogPanel>
            </Dialog>
            )}
        </>
    );
    
    // Invoca la función renderContent
    return renderContent();
};

export default CategoryForm;
