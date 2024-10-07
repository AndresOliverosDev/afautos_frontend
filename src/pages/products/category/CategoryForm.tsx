import { Button, Dialog, DialogPanel, Textarea } from "@tremor/react";
import { useForm } from "react-hook-form";
import useCategory from "../../../hooks/products/useCategory";
import { useEffect, useState } from "react";
import { Category } from "../../../types";
import React from "react";
import { TextInput } from "../../../components/ui";

interface CategoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    dataUpdate?: Category; // Usar la interfaz para tipar dataUpdate
}

const CategoryForm: React.FC<CategoryFormProps> = ({ isOpen, onClose, dataUpdate }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createCategory, updateCategory } = useCategory();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState(""); // Para mostrar mensajes de feedback

    useEffect(() => {
        if (dataUpdate) {
            reset({ name: dataUpdate.name, description: dataUpdate.desc });
        }
    }, [dataUpdate, reset]);

    const onSubmit = () => {

    }

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogPanel className="flex flex-col gap-5">
                <p className="text-xl border-b-4 border-tremor-brand pb-2">
                    {dataUpdate ? 'ACTUALIZAR CATEGORÍA' : 'CREAR CATEGORÍA'}
                </p>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nombre:</label>
                        <TextInput
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
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "La descripción es requerida"
                                }
                            })}
                        />
                    </div>
                    {message && <p className="text-green-500">{message}</p>} {/* Mensaje de feedback */}
                    <Button variant="secondary" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Procesando..." : (dataUpdate ? 'Actualizar categoría' : 'Crear categoría')}
                    </Button>
                </form>
            </DialogPanel>
        </Dialog>
    );
};

export default CategoryForm;