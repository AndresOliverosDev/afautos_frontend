import { RiAccountPinCircleLine, RiBox3Line, RiShoppingBag3Line, RiShoppingCart2Line, } from "react-icons/ri";

export const mainMenu = [
    {
        "header": "Productos",
        "icon": RiShoppingBag3Line,
        "links": [
            {
                "name": 'Inventario',
                "link": '/productos'
            },
            {
                "name": 'Informes',
                "link": '/productos/informes'
            }
        ]
    },
    {
        "header": "Pedidos",
        "icon": RiBox3Line,
        "links": [
            {
                "name": 'Listado pedidos',
                "link": '/pedidos'
            },
            {
                "name": 'Informes',
                "link": '/pedidos/informes'
            }
        ]
    },
    {
        "header": "Clientes",
        "icon": RiAccountPinCircleLine,
        "links": [
            {
                "name": 'Listado clientes',
                "link": '/clientes'
            },
            {
                "name": 'Informes',
                "link": '/clientes/informes'
            }
        ]
    },
    {
        "header": "Ventas",
        "icon": RiShoppingCart2Line,
        "links": [
            {
                "name": 'Listado ventas',
                "link": '/ventas'
            },
            {
                "name": 'Informes de ventas',
                "link": '/ventas/informes'
            }
        ]
    }
];
