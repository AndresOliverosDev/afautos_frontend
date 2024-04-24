// En DialogUsageExample.j
import { Button, Dialog, DialogPanel, TextInput, Textarea, NumberInput, SearchSelect, SearchSelectItem } from '@tremor/react';
import { addProd } from '../../services/products/productAPI';

import { useForm } from 'react-hook-form';

const ProductsAdd = ({ isOpen, onClose }) => {

  const { register, handleSubmit, setValue, reset,
    formState: { errors } } = useForm();

  const catData = [
    {
      "id": 1,
      "name": "Filtros",
    },
    {
      "id": 2,
      "name": "Frenos",
    },
    {
      "id": 3,
      "name": "Baterías",
    },
    {
      "id": 4,
      "name": "Lubricantes",
    }
  ]

  const brands = [
    {
      "id": 2,
      "name": "ACDelco"
    },
    {
      "id": 1,
      "name": "Bosch"
    },
    {
      "id": 4,
      "name": "Brembo"
    },
    {
      "id": 3,
      "name": "Mann Filter"
    },
    {
      "id": 5,
      "name": "Motul"
    }
  ]

  const handleChangeBrand = (value) => {
    setValue('brand', value);
  };

  const handleChangeCat = (value) => {
    setValue('cat', value);
  };

  const onSubmit = handleSubmit((data) => {
    try {
      addProd(data);
      onClose();
      return alert("Producto creado")
    } catch (error) {
      return "error"
    }
    reset();
  })

  return (
    <Dialog open={isOpen} onClose={onClose} static={true} className=''>
      <DialogPanel>
        <form onSubmit={onSubmit} className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <div className="flex flex-col gap-2">
            <h1 className='text-tremor-title dark:text-dark-tremor-content-emphasis text-tremor-content-emphasis'>Crear Producto</h1>
            <div className="flex flex-col">
              <label htmlFor="prod_name">Nombre del Producto</label>
              <TextInput
                error={errors.name}
                errorMessage={errors.name?.message}
                type="text"
                id="prod_name"
                name="prod_name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "¡Este campo es requerido!"
                  },
                  maxLength: {
                    value: 30,
                    message: "¡La longitud máxima se excede!"
                  }
                })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Descripción</label>
              <Textarea
              error={errors.desc}
              errorMessage={errors.desc?.message}
                id="description"
                name="description"
                {...register("desc",
                {maxLength: {
                  value:255,
                  message:"La cantidad maxima es de 255 caracteres"
                }})}
                className="mt-1 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-w-min"
              ></Textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity">Cantidad</label>
              <NumberInput
                error={errors.quantity}
                errorMessage={errors.quantity?.message}
                type="number"
                id="quantity"
                name="quantity"
                {...register("quantity",
                  {
                    required: {
                      value: true,
                      message: "¡Este campo es requerido!"
                    },
                    max: {
                      value: 32000,
                      message: "La cantidad maxima es de 32.000"
                    }
                  })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Precio</label>
              <NumberInput
                error={errors.price}
                errorMessage={errors.price?.message}
                type="number"
                id="price"
                name="price"
                {...register("price",
                  {
                    required: {
                      value: true,
                      message: "¡Este campo es requerido!"
                    },
                    max: {
                      value: 9999999999,
                      message: "El precio supero la cantidad maxima"
                    }
                  }
                )}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image_url">URL de la Imagen</label>
              <Textarea
                error={errors.imageUrl}
                errorMessage={errors.imageUrl?.message}
                type="text"
                id="image_url"
                name="image_url"
                {...register("imageUrl",
                {maxLength: {
                  value:255,
                  message:"La cantidad maxima es de 255 caracteres"
                }})}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cat">Categoría</label>
              <SearchSelect onValueChange={handleChangeCat}>
                {catData.map((cat) => (
                  <SearchSelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="flex flex-col">
              <label htmlFor="brand">Marca</label>
              <SearchSelect onValueChange={handleChangeBrand}>
                {brands.map((brand) => (
                  <SearchSelectItem key={brand.id} value={brand.id}>
                    {brand.name}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
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
