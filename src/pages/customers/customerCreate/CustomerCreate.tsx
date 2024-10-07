import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogPanel, SearchSelect, SearchSelectItem, MultiSelect, MultiSelectItem } from '@tremor/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuth from '../../../hooks/authentication/useAuth';
import { TextInput } from '../../../components/ui';

interface Role {
    id: number;
    name: string;
}

interface DocType {
    id: number;
    name: string;
}

interface CustomerData {
    id: number;
    username: string;
    email: string;
    phone: string;
    name: string;
    birthday: string;
    docType: number;
    roles: number[];
    date: string;
}

interface CustomerCreateProps {
    isOpen: boolean;
    handleClose: () => void;
    customerData?: CustomerData | null;
}

const CustomerCreate: React.FC<CustomerCreateProps> = ({ isOpen, handleClose, customerData = null }) => {
    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm();
    const { createUser } = useAuth();
    const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);
    const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const updateUser = (data:any) => {
        alert("Act")
    }

    const rolesData: Role[] = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Logística' },
        { id: 3, name: 'Ventas' },
        { id: 4, name: 'Cliente' }
    ];

    const docTypes: DocType[] = [
        { id: 1, name: 'Cédula de ciudadanía' },
        { id: 2, name: 'Cédula de extranjería' },
        { id: 3, name: 'NIT' }
    ];

    useEffect(() => {
        if (customerData) {
            setValue('id', customerData.id);
            setValue('username', customerData.username);
            setValue('email', customerData.email);
            setValue('phone', customerData.phone);
            setValue('name', customerData.name);
            setValue('birthday', customerData.birthday);
            setValue('docType', customerData.docType);
            setValue('roles', customerData.roles);
        } else {
            reset();
        }
    }, [customerData, setValue, reset]);

    const handleRolesChange = (values: number[]) => {
        setValue('roles', values);
    };

    const handleDocTypeChange = (value: number) => {
        setValue('docType', value);
    };

    const onSubmit: SubmitHandler<any> = async (data) => {
        setErrorMessage(null);
        try {
            if (data.password !== data.confirmPassword) {
                throw new Error("Las contraseñas no coinciden.");
            }

            if (customerData) {
                await updateUser(data);
            } else {
                await createUser(data);
            }
            setShowSuccessDialog(true);
            handleClose();
            reset();
        } catch (error: any) {
            setErrorMessage(error.message || 'Error al guardar el usuario.');
            setShowErrorDialog(true);
        }
    };

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose} static={true}>
                <DialogPanel>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        <div className="flex flex-col gap-2">
                            <h1 className='text-tremor-title dark:text-dark-tremor-content-emphasis text-tremor-content-emphasis'>
                                {customerData ? 'Editar Usuario' : 'Crear Usuario'}
                            </h1>
                            {/* Document number input */}
                            <div className="flex flex-col">
                                <label htmlFor="id">Numero de documento</label>
                                <TextInput
                                    placeholder='Ejm: 1000123123'
                                    error={errors.id}
                                    errorMessage={errors.id?.message}
                                    id="id"
                                    type='number'
                                    {...register("id", {
                                        required: {
                                            value: true,
                                            message: "Debes ingresar tu número de documento"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "La longitud debe ser menor a 10 digitos"
                                        }
                                    })}
                                />
                            </div>
                            {/* Username input */}
                            <div className="flex flex-col">
                                <label htmlFor="username">Nombre de usuario</label>
                                <TextInput
                                    placeholder='JohnDoe'
                                    error={errors.username}
                                    errorMessage={errors.username?.message}
                                    id="username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "Debes ingresar un nombre de usuario"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "El nombre de usuario debe tener menos de 10 caracteres"
                                        }
                                    })}
                                />
                            </div>
                            {/* Password input */}
                            <div className="flex flex-col">
                                <label htmlFor="password">Contraseña</label>
                                <TextInput
                                    placeholder='Introduce una contraseña'
                                    error={errors.password}
                                    errorMessage={errors.password?.message}
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Ingresa una contraseña"
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "La contraseña debe tener mas de 8 caracteres"
                                        }
                                    })}
                                />
                            </div>
                            {/* Confirm Password input */}
                            <div className="flex flex-col">
                                <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                                <TextInput
                                    placeholder='Confirma tu contraseña'
                                    error={errors.confirmPassword}
                                    errorMessage={errors.confirmPassword?.message}
                                    type="password"
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: {
                                            value: true,
                                            message: "Debes confirmar tu contraseña"
                                        },
                                        validate: value => value === watch('password') || "Las contraseñas no coinciden"
                                    })}
                                />
                            </div>
                            {/* Email input */}
                            <div className="flex flex-col">
                                <label htmlFor="email">Correo electrónico</label>
                                <TextInput
                                    placeholder='Ingresa un correo electrónico'
                                    errorMessage={errors.email?.message}
                                    id="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Debes ingresar tu correo electrónico"
                                        },
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                            message: "El Correo no es válido"
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: "El correo es demasiado largo"
                                        }
                                    })}
                                />
                            </div>
                            {/* Number phone input */}
                            <div className="flex flex-col">
                                <label htmlFor="phone">Número de celular</label>
                                <TextInput
                                    placeholder='Ingresa tu número de celular'
                                    error={errors.phone}
                                    errorMessage={errors.phone?.message}
                                    id="phone"
                                    type='number'
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: 'El numero no puede tener mas de 10 digitos'
                                        }
                                    })}
                                />
                            </div>
                            {/* Full name input */}
                            <div className="flex flex-col">
                                <label htmlFor="name">Nombre completo</label>
                                <TextInput
                                    placeholder='Ingresa tu nombre completo'
                                    error={errors.name}
                                    errorMessage={errors.name?.message}
                                    id="name"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="birthday">Birthday</label>
                                <TextInput
                                    type="date"
                                    error={errors.birthday}
                                    errorMessage={errors.birthday?.message}
                                    id="birthday"
                                    {...register("birthday", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="docType">Document Type</label>
                                <SearchSelect onValueChange={handleDocTypeChange}>
                                    {docTypes.map((docType) => (
                                        <SearchSelectItem key={docType.id} value={docType.id}>
                                            {docType.name}
                                        </SearchSelectItem>
                                    ))}
                                </SearchSelect>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="roles">Roles</label>
                                <MultiSelect onValueChange={handleRolesChange}>
                                    {rolesData.map((role) => (
                                        <MultiSelectItem key={role.id} value={role.id}>
                                            {role.name}
                                        </MultiSelectItem>
                                    ))}
                                </MultiSelect>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button type="submit">
                                {customerData ? 'Actualizar Usuario' : 'Crear Usuario'}
                            </Button>
                        </div>
                    </form>
                </DialogPanel>
            </Dialog>
            {/* Success Dialog */}
            <Dialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} static={true}>
                <DialogPanel>
                    <h1>Usuario {customerData ? 'actualizado' : 'creado'} exitosamente!</h1>
                    <div className="mt-4 flex justify-end">
                        <Button onClick={() => setShowSuccessDialog(false)}>Cerrar</Button>
                    </div>
                </DialogPanel>
            </Dialog>
            {/* Error Dialog */}
            <Dialog open={showErrorDialog} onClose={() => setShowErrorDialog(false)} static={true}>
                <DialogPanel>
                    <h1>Error!</h1>
                    {errorMessage && <p>{errorMessage}</p>}
                    <div className="mt-4 flex justify-end">
                        <Button onClick={() => setShowErrorDialog(false)}>Cerrar</Button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
};

export default CustomerCreate;