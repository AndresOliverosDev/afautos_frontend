import React, { useState } from 'react';

const ProductsAdd = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del producto a tu backend o realizar otra acción
        console.log({
            productName,
            productDescription,
            productPrice,
            productQuantity
        });
        // Limpia los campos después de enviar el formulario
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductQuantity('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre del Producto:
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </label>
            <label>
                Descripción del Producto:
                <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    required
                />
            </label>
            <label>
                Precio del Producto:
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    required
                />
            </label>
            <label>
                Cantidad del Producto:
                <input
                    type="number"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductsAdd;
