import { Card, Icon } from '@tremor/react';
import { RiStore3Line, RiFireLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ProductsAdd } from "../pages/products"
import {useState} from 'react';

const Home = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const cardLinks = [
        {
            "title": "Inventario productos",
            "desc": "Ver inventario de productos",
            "icon": RiStore3Line,
            "route": "/Productos"
        },
        {
            "title": "Añadir productos",
            "desc": "Añadir productos a tienda",
            "icon": RiFireLine,
            'route': true
        },
        {
            "title": "Registrar venta",
            "desc": "Registrar venta",
            "icon": RiFireLine,
            'route': "/Ventas"
        },
        {
            "title": "Ver pedidos",
            "desc": "Ver lista de pedidos",
            "icon": RiFireLine,
            'route': "/Pedidos"
        },
        {
            "title": "Ver Clientes",
            "desc": "Ver lista de clientes",
            "icon": RiFireLine,
            'route': "/Clientes"
        },
        {
            "title": "Añadir clientes",
            "desc": "Añadir un nuevo cliente",
            "icon": RiFireLine,
            'route': "/Productos"
        },        {
            "title": "Crear pedido",
            "desc": "Crear un nuevo pedido",
            "icon": RiFireLine,
            'route': "/Pedidos"
        },

    ]

    return (
<section className="dark:text-gray-100 w-full flex flex-wrap justify-center">
    {cardLinks.map((card, index) =>
        <Link 
            to={card.route}
            key={index}
            className='w-full sm:w-1/2 md:w-1/2 lg:w-auto lg:min-w-80 p-4'>
            <Card
                decoration="top"
                decorationColor="blue"
                className='p-4 flex gap-4'
                onClick={() => card.route && setIsDialogOpen(true)}
            >
                <Icon
                    tooltip={card.title}
                    icon={card.icon}
                    variant='light'
                    size='xl'
                    
                />
                <span>
                    <h2 className='text-lg md:text-xl font-semibold'>
                        {card.title}
                    </h2>
                    <p className='text-gray-400 text-wrap'>
                        {card.desc}
                    </p>
                </span>
            </Card>
        </Link>
    )}
    <ProductsAdd isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}/>
</section>
    );
}

export default Home;