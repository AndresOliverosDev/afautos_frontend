import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogPanel, TextInput, SearchSelect, SearchSelectItem, MultiSelect, MultiSelectItem } from '@tremor/react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/authentication/useAuth';

const CustomerCreate = ({ isOpen, handleClose, customerData = null }) => {
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
    const { createUser, updateUser, responseRegister, errorAuth } = useAuth();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const rolesData = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'Logística' },
        { id: 3, name: 'Ventas' },
        { id: 4, name: 'Cliente' }
    ];

    const docTypes = [
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

    const handleRolesChange = (values) => {
        setValue('roles', values);
    };

    const handleDocTypeChange = (value) => {
        setValue('docType', value);
    };

    const onSubmit = handleSubmit(async (data) => {
        setErrorMessage(null);
        try {
            if (customerData) {
                await updateUser(data);
            } else {
                await createUser(data);
            }
            setShowSuccessDialog(true);
            handleClose();
            reset();
        } catch (error) {
            setErrorMessage(error.message || 'Error al guardar el usuario.');
            setShowErrorDialog(true);
        }
    });

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose} static={true}>
                <DialogPanel>
                    <form onSubmit={onSubmit} className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        <div className="flex flex-col gap-2">
                            <h1 className='text-tremor-title dark:text-dark-tremor-content-emphasis text-tremor-content-emphasis'>
                                {customerData ? 'Editar Usuario' : 'Crear Usuario'}
                            </h1>
                            <div className="flex flex-col">
                                <label htmlFor="id">ID</label>
                                <TextInput
                                    error={errors.id}
                                    errorMessage={errors.id?.message}
                                    id="id"
                                    {...register("id", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="username">Username</label>
                                <TextInput
                                    error={errors.username}
                                    errorMessage={errors.username?.message}
                                    id="username"
                                    {...register("username", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Password</label>
                                <TextInput
                                    error={errors.password}
                                    errorMessage={errors.password?.message}
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <TextInput
                                    error={errors.email}
                                    errorMessage={errors.email?.message}
                                    id="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        },
                                        pattern: {
                                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                                            message: "¡El email no es válido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone</label>
                                <TextInput
                                    error={errors.phone}
                                    errorMessage={errors.phone?.message}
                                    id="phone"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "¡Este campo es requerido!"
                                        }
                                    })}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="name">Name</label>
                                <TextInput
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
                        <Button type='submit' className="mt-8 w-full">
                            {customerData ? 'Actualizar Usuario' : 'Crear Usuario'}
                        </Button>
                    </form>
                </DialogPanel>
            </Dialog>

            <Dialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                        {customerData ? 'Usuario Actualizado Exitosamente' : 'Usuario Creado Exitosamente'}
                    </h3>
                    <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        {customerData ? 'El usuario ha sido actualizado exitosamente.' : 'El usuario ha sido creado exitosamente.'}
                    </p>
                    <Button className="mt-8 w-full" onClick={() => setShowSuccessDialog(false)}>
                        Entendido
                    </Button>
                </DialogPanel>
            </Dialog>

            <Dialog open={showErrorDialog} onClose={() => setShowErrorDialog(false)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-red-500">
                        Error
                    </h3>
                    <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        {errorMessage}
                    </p>
                    <Button className="mt-8 w-full" onClick={() => setShowErrorDialog(false)}>
                        Entendido
                    </Button>
                </DialogPanel>
            </Dialog>
        </>
    );
};

export default CustomerCreate;
