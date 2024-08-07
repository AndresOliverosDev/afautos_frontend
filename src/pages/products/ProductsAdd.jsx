import { Button, Dialog, DialogPanel, TextInput, Textarea, NumberInput, SearchSelect, SearchSelectItem } from '@tremor/react';
import { addProd } from '../../services/products/productAPI';

import { useForm } from 'react-hook-form';
import useProduct from '../../hooks/products/useProduct';
import useCategory from '../../hooks/products/useCategory';

const ProductsAdd = ({ isOpen, onClose }) => {

  const { addProduct } = useProduct();
  const { categoryData } = useCategory();

  const { register, handleSubmit, setValue, reset,
    formState: { errors } } = useForm();

  const brands = [
    {
      "id": 2,
      "name": "Nokia"
    },
    {
      "id": 1,
      "name": "Sony"
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
    setValue('category', value);
  };

  const onSubmit = handleSubmit((data) => {
    try {
      addProduct({
        name: data.name,
        desc: data.desc,
        quantity: data.quantity,
        price: data.price,
        image: data.image,
        category: data.category,
        brand: data.brand,
      });
      onClose();
      console.log(data)
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
              <label htmlFor="name">Nombre del Producto</label>
              <TextInput
                error={errors.name}
                errorMessage={errors.name?.message}
                type="text"
                id="name"
                name="name"
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
              <label htmlFor="desc">Descripción</label>
              <Textarea
                error={errors.desc}
                errorMessage={errors.desc?.message}
                id="desc"
                name="desc"
                {...register("desc",
                {maxLength: {
                  value: 255,
                  message: "La cantidad máxima es de 255 caracteres"
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
                      message: "La cantidad máxima es de 32,000"
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
                      message: "El precio superó la cantidad máxima"
                    }
                  }
                )}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image">URL de la Imagen</label>
              <Textarea
                error={errors.image}
                errorMessage={errors.image?.message}
                type="text"
                id="image"
                name="image"
                {...register("image",
                {maxLength: {
                  value: 255,
                  message: "La cantidad máxima es de 255 caracteres"
                }})}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category">Categoría</label>
              <SearchSelect onValueChange={handleChangeCat}>
                {categoryData.map((cat) => (
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
