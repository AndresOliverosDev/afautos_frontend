import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogPanel,
  SearchSelect,
  SearchSelectItem,
  MultiSelect,
  MultiSelectItem,
} from '@tremor/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextInput } from '../../../components/ui';
import useCustomer from '../hooks/useCustomer';
import { CustomerCreate } from '../../../types';

export interface Role {
  id: number;
  name: string;
}

export interface DocType {
  id: number;
  name: string;
}

export interface CustomerData extends Omit<CustomerCreate, 'password'> {
  password?: string; // Opcional para edición
  confirmPassword?: string; // Solo se usa para validación
}

interface CustomerFormProps {
  isOpen: boolean;
  handleClose: () => void;
  rolesList: Role[];
  docTypeList: DocType[];
  customerData?: CustomerData | null; // Datos previos si se está editando
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  isOpen,
  handleClose,
  rolesList,
  docTypeList,
  customerData,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<CustomerData>({
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      name: '',
      birthday: '',
      docType: 0,
      roles: [],
      password: '',
      confirmPassword: '',
      ...customerData, // Sobrescribir si existen datos previos
    },
  });

  const [roles, setRoles] = useState<number[]>(customerData?.roles || []);
  const [docType, setDocType] = useState<number>(customerData?.docType || 0);

  const { createCustomer } = useCustomer();

  useEffect(() => {
    if (customerData) {
      reset(customerData);
      setRoles(customerData.roles);
      setDocType(customerData.docType);
    }
  }, [customerData, reset]);

  const handleRolesChange = (selectedRoles: number[]) => {
    setRoles(selectedRoles);
    setValue('roles', selectedRoles);
  };

  const handleDocTypeChange = (selectedDocType: number | 0) => {
    setDocType(selectedDocType);
    setValue('docType', selectedDocType || 0);
  };

  const onSubmit: SubmitHandler<CustomerData> = async (data) => {
    if (!data.docType) {
      alert('Selecciona un tipo de documento.');
      return;
    }

    if (!customerData && data.password !== data.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const customer: CustomerCreate = {
        id: data.id || '',
        name: data.name,
        phone: data.phone,
        email: data.email,
        birthday: data.birthday,
        password: data.password || '',
        username: data.username,
        docType: data.docType,
        roles,
      };

      await createCustomer(customer);
      reset();
      handleClose();
    } catch (error: any) {
      alert(error.message || 'Ocurrió un error al guardar el usuario.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogPanel>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-lg font-bold mb-4">
            {customerData ? 'Editar Usuario' : 'Crear Usuario'}
          </h3>


          <TextInput
            label="Numero de documento"
            placeholder="Ingresa numero de documento"
            {...register('id', { required: 'El numero de documento es obligatorio' })}
            error={errors.id?.message}
          />

          <TextInput
            label="Nombre de Usuario"
            placeholder="Escribe el nombre de usuario"
            {...register('username', { required: 'El nombre de usuario es obligatorio' })}
            error={errors.username?.message}
          />

          <TextInput
            label="Correo Electrónico"
            placeholder="Escribe el correo electrónico"
            {...register('email', {
              required: 'El correo electrónico es obligatorio',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo no válido' },
            })}
            error={errors.email?.message}
          />

          <TextInput
            label="Teléfono"
            placeholder="Escribe el número de teléfono"
            {...register('phone', { required: 'El número de teléfono es obligatorio' })}
            error={errors.phone?.message}
          />

          <TextInput
            label="Nombre Completo"
            placeholder="Escribe el nombre completo"
            {...register('name', { required: 'El nombre completo es obligatorio' })}
            error={errors.name?.message}
          />

          <TextInput
            label="Fecha de Nacimiento"
            type="date"
            {...register('birthday', { required: 'La fecha de nacimiento es obligatoria' })}
            error={errors.birthday?.message}
          />

          <SearchSelect
            value={docType}
            onValueChange={(value) => handleDocTypeChange(Number(value))}
            placeholder="Selecciona el tipo de documento"
          >
            {docTypeList.map((type) => (
              <SearchSelectItem key={type.id} value={type.id}>
                {type.name}
              </SearchSelectItem>
            ))}
          </SearchSelect>


          <MultiSelect
            value={roles}
            onValueChange={(selectedValues) => handleRolesChange(selectedValues.map(Number))}
            placeholder="Selecciona los roles"
          >
            {rolesList.map((role) => (
              <MultiSelectItem key={role.id} value={role.id}>
                {role.name}
              </MultiSelectItem>
            ))}
          </MultiSelect>


          {!customerData && (
            <>
              <TextInput
                label="Contraseña"
                type="password"
                placeholder="Escribe la contraseña"
                {...register('password', {
                  required: 'La contraseña es obligatoria',
                  minLength: { value: 6, message: 'Debe tener al menos 6 caracteres' },
                })}
                error={errors.password?.message}
              />

              <TextInput
                label="Confirmar Contraseña"
                type="password"
                placeholder="Confirma la contraseña"
                {...register('confirmPassword', {
                  validate: (value) => value === watch('password') || 'Las contraseñas no coinciden',
                })}
                error={errors.confirmPassword?.message}
              />
            </>
          )}

          <div className="flex justify-end space-x-2">
            <Button onClick={handleClose} type="button" variant="secondary">
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              {customerData ? 'Actualizar' : 'Crear'}
            </Button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>
  );
};

export default CustomerForm;
