import { Button, Dialog, DialogPanel, Textarea, NumberInput, SearchSelect, SearchSelectItem } from '@tremor/react';
import { TextInput } from '../../components/ui';
import React from 'react';
import { useForm } from 'react-hook-form';
import { addProd } from '../../services/products/productAPI';

type ProductsAddProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductsAdd: React.FC<ProductsAddProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

  const catData = [
    { id: 1, name: "Filtros" },
    { id: 2, name: "Frenos" },
    { id: 3, name: "Baterías" },
    { id: 4, name: "Lubricantes" }
  ];

  const brands = [
    { id: 2, name: "ACDelco" },
    { id: 1, name: "Bosch" },
    { id: 4, name: "Brembo" },
    { id: 3, name: "Mann Filter" },
    { id: 5, name: "Motul" }
  ];

  const handleChangeBrand = (value:any) => setValue('brand', value);
  const handleChangeCat = (value:any) => setValue('cat', value);

  const onSubmit = async (data:any) => {
    try {
      await addProd(data);
      alert("Producto creado");
      onClose();
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Error al crear el producto");
    } finally {
      reset(); // Reinicia el formulario después de manejar el resultado
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} static={true}>
      <DialogPanel>
        <form onSubmit={handleSubmit(onSubmit)} className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <h1 className='text-tremor-title dark:text-dark-tremor-content-emphasis'>Crear Producto</h1>
          <div className="flex flex-col gap-2">
            <TextInput
              error={errors.name}
              errorMessage={errors.name?.message}
              {...register("name", {
                required: "¡Este campo es requerido!",
                maxLength: { value: 30, message: "¡La longitud máxima se excede!" }
              })}
              id="prod_name"
              placeholder="Nombre del Producto"
            />
            <Textarea
              id="description"
              {...register("desc")}
              placeholder="Descripción"
              className="mt-1"
            />
            <NumberInput
              {...register("quantity", {
                required: "¡Este campo es requerido!",
                max: { value: 32000, message: "La cantidad máxima es de 32,000" }
              })}
              id="quantity"
              placeholder="Cantidad"
            />
            <NumberInput
              {...register("price", {
                required: "¡Este campo es requerido!",
                max: { value: 9999999999, message: "El precio superó la cantidad máxima" }
              })}
              id="price"
              placeholder="Precio"
            />
            <Textarea
              id="image_url"
              {...register("imageUrl")}
              placeholder="URL de la Imagen"
            />
            <SearchSelect onValueChange={handleChangeCat}>
              {catData.map((cat) => (
                <SearchSelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SearchSelectItem>
              ))}
            </SearchSelect>
            <SearchSelect onValueChange={handleChangeBrand}>
              {brands.map((brand) => (
                <SearchSelectItem key={brand.id} value={brand.id}>
                  {brand.name}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
          <Button type='submit' className="mt-8 w-full">
            Got it!
          </Button>
        </form>
      </DialogPanel>
    </Dialog>
  );
};

export default ProductsAdd;