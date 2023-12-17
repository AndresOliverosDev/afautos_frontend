/* Iconos */
import {IconArrowLeft,IconHome,IconLogo,IconUsers,IconUser,IconOrder,IconTruck,IconBalance} from '../assets/icons/indexIcons.js'

import {P, Psmall} from '../components/ui/indexUi.js'
import TougleButton from '../components/TougleButton';
import {useState} from 'react';

function SideBar() {

    const [visit,setVisit] = useState(null);

    const navSections  = [
        {id:1,'name':'Inicio', icon:<IconHome />},
        {id:2,'name':'Pedidos', icon:<IconOrder />},
        {id:3,'name':'Clientes', icon:<IconUser />},
        {id:4,'name':'Informes', icon:<IconBalance />},
        {id:5,'name':'Empleados', icon:<IconUsers />},
        {id:6,'name':'Proveedores', icon:<IconTruck />}
    ];

    /* Clases de Tailwind para links */
    const link = "flex items-center justify-start w-full p-3 my-2 font-sans font-thin text-lTextMut transition-colors duration-200 cursor-pointer fill-lTextNeu hover:text-lContrast hover:fill-lContrast dark:text-dTextNeu dark:hover:text-dContrast dark:fill-dTextNeu dark:hover:fill-dContrast";
    const linkActive = "flex items-center justify-start w-full p-3 my-2 font-thin text-dTextPri fill-dTextPri transition-colors duration-200 rounded-xl bg-gradient-to-r from-dBackground to-dContainer dark:from-gray-700 dark:to-gray-800 dark:text-dTextImp dark:fill-dContrastSec";

    return (

    <div className="relative hidden h-screen shadow-lg lg:block w-auto">
        <div className="h-full bg-lContainer dark:bg-dContainer">
            <div className="flex items-center justify-center pt-6">
                <IconLogo />
            </div>

            <nav className="mt-6 p-3">
                {navSections.map((value) => (
                    <a key={value.id} className={visit === value.id 
                    ?
                    linkActive
                    : link
                    }
                     onClick={()=>setVisit(value.id)}
                     >

                        {value.icon}
                        <P text={value.name}/>

                    </a>
                    
                ))
                }
                    <a className={` mt-6 ${link}`}>
                        <IconArrowLeft />
                        <Psmall text='Ocultar' />
                    </a>
                
            </nav>
            <span className='flex justify-center mt-6'>
                <TougleButton />
            </span>


        </div>
    </div>
    )
};
export default SideBar;