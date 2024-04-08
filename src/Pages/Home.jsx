import { Card, Icon } from '@tremor/react';
import { RiStore3Line, RiFireLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Home = () => {

    const cardLinks = [
        {
            "title": "Inventario productos",
            "desc": "Ver inventario de productos",
            "icon": RiStore3Line,
            "route": "/Pedidos"
        },
        {
            "title": "Añadir productos",
            "desc": "Añadir productos a tienda",
            "icon": RiFireLine,
            'route': "/Productos"
        },
        {
            "title": "Registrar venta",
            "desc": "Registrar venta",
            "icon": RiFireLine,
            'route': "/Productos"
        },
        {
            "title": "Ver pedidos",
            "desc": "Ver lista de pedidos",
            "icon": RiFireLine,
            'route': "/Productos"
        },
        {
            "title": "Ver Clientes",
            "desc": "Ver lista de clientes",
            "icon": RiFireLine,
            'route': "/Productos"
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
            'route': "/Productos"
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
</section>
    );
}

export default Home;