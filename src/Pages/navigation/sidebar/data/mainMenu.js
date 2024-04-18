import { RiAccountPinCircleLine, RiBox3Line, RiHomeLine, RiShoppingBag3Line, RiShoppingCart2Line, } from "react-icons/ri";

export const mainMenu = [
    {
        "header": "Inicio",
        "accordion":false,
        "icon":RiHomeLine,
        "link":"/"
    },
    {
        "header": "Productos",
        "accordion":true,
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
        "accordion":true,
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
        "accordion":true,
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
        "accordion":true,
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
