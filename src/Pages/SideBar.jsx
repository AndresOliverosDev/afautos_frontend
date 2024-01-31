/**Material Tailwind Components*/
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";

/** HeroIcons Dev Icons */
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    Cog6ToothIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

/** React Hooks */
import { useState } from "react";

/** UI Components  */
import { AccordionUI } from '../components/ui/indexUi'

function SideBar() {

    /** Estate Accordion Dashboard*/
    const [dashboardOpen, setDashboardOpen] = useState(false);
    /** Estate Accordion Shop*/
    const [shopOpen, setShopOpen] = useState(false);

    /** Event Handle Function for Dashboard Accordion */
    const toggleDashboard = () => {
        setDashboardOpen(!dashboardOpen);
        if (shopOpen) {
            setShopOpen(false);
        }
    };

    /** Event Handle Function for Dashboard Accordion */
    const toggleShop = () => {
        setShopOpen(!shopOpen);
        if (dashboardOpen) {
            setDashboardOpen(false);
        }
    };

    /** Array Accordion Items */
    const dashboardItems = ['Informes', 'Análisis de Ventas'];
    const shopItems = ['Productos', 'Pedidos', 'Clientes', 'Empleados']

    return (

        <Card className="h-full w-full p-2 shadow-xl shadow-blue-gray-900/5 overflow-scroll"  >
            <Typography className="text-center mb-2 p-4" variant="h5" color="blue-gray">
                AFautos
            </Typography>

            <List>
                {/** Dashboard Accordion */}
                <AccordionUI title='Dashboard' items={dashboardItems} iconTitle={<PresentationChartBarIcon />} handleClick={() => toggleDashboard()} stateOpen={dashboardOpen} />
                {/** Shop Accordion */}
                <AccordionUI title='Tienda' items={shopItems} iconTitle={<ShoppingBagIcon />} handleClick={() => toggleShop()} stateOpen={shopOpen} />
                <hr className="my-2 border-blue-gray-50" />

                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Ajustes
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Cerrar Sesión
                </ListItem>
            </List>
        </Card>
    );
}
export default SideBar;
