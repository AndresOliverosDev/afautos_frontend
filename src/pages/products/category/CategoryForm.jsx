import { Button, Dialog, DialogPanel, Textarea, TextInput } from "@tremor/react";
import { useForm } from "react-hook-form";
import useCategory from "../../../hooks/products/useCategory";
import { useEffect } from "react";

const CategoryForm = ({ isOpen, onClose, dataUpdate }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { createCategory, updateCategory } = useCategory();

    useEffect(() => {
        if (dataUpdate) {
            reset({ name: dataUpdate?.name, description: dataUpdate?.desc });
        }
    }, [dataUpdate, reset]);

    const onSubmit = handleSubmit((data) => {
        if (dataUpdate) {
            updateCategory(dataUpdate.id, data);
        } else {
            createCategory(data);
        }
        onClose();
    });

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
                            name="name"
                            error={errors.name}
                            errorMessage={errors.name?.message}
                            {
                            ...register("name", {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                }
                            })
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="description">Descripción:</label>
                        <Textarea
                            placeholder="Descripción de la categoría"
                            id="description"
                            name="description"
                            error={errors.description}
                            errorMessage={errors.description?.message}
                            {
                            ...register("description", {
                                required: {
                                    value: true,
                                    message: "La descripción es requerida"
                                }
                            })
                            }
                        />
                    </div>
                    <Button variant="secondary" type="submit">
                        {dataUpdate ? 'Actualizar categoría' : 'Crear categoría'}
                    </Button>
                </form>
            </DialogPanel>
        </Dialog>
    );
};

export default CategoryForm;
