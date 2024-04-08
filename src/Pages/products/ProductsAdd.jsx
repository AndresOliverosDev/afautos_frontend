// En DialogUsageExample.j
import { Button, Dialog, DialogPanel, TextInput, Textarea, NumberInput, SearchSelect, SearchSelectItem } from '@tremor/react';
import React, { useState } from 'react';
import { addProd } from '../../services/products/productAPI';

const ProductsAdd = ({ isOpen, onClose }) => {

  const categories = [
    "Filtros de aceite",
    "Pastillas de freno",
    "Discos de freno",
    "Bujías",
    "Neumáticos",
    "Baterías",
    "Correas de distribución",
    "Bombillas",
    "Amortiguadores",
    "Escobillas limpiaparabrisas"
  ];
  const brands = [
    "Bosch",
    "Michelin",
    "NGK",
    "Ferodo",
    "Brembo",
    "Varta",
    "Gates",
    "Osram",
    "Monroe",
    "Bosal"
  ];

  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    quantity: '',
    price: '',
    imageUrl: '',
    cat: '',
    brand: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProd(formData);
      onClose();
    } catch (error) {
      console.error("Error al crear el producto", error);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} static={true} className=''>
      <DialogPanel>
        <form onSubmit={handleSubmit} className="p-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          <div className="flex flex-col gap-2">
            <h1 className='text-tremor-title dark:text-dark-tremor-content-emphasis text-tremor-content-emphasis'>Crear Producto</h1>
            <div className="flex flex-col">
              <label htmlFor="prod_name">Nombre del Producto</label>
              <TextInput
                type="text"
                id="prod_name"
                name="prod_name"
                value={formData.prod_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="description">Descripción</label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-w-min"
              ></Textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="quantity">Cantidad</label>
              <NumberInput
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price">Precio</label>
              <NumberInput
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image_url">URL de la Imagen</label>
              <Textarea
                type="text"
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cat">Categoría</label>
              <SearchSelect>
                {categories.map((cat, index) => (
                  <SearchSelectItem value={index}>
                    {index+1}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="flex flex-col">
              <label htmlFor="brand">Marca</label>
              <SearchSelect>
                {brands.map((brand, index) => (
                  <SearchSelectItem value={index}>
                    {brand}
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
