import iLogo from '../assets/icons/logo.svg';
import iHome from '../assets/icons/home.svg';
import iOrder from '../assets/icons/package.svg';
import iClient from '../assets/icons/group.svg';
import TougleButton from '../components/TougleButton';
import { useState,useEffect } from 'react';

function SideBar() {

    const [visit,setVisit] = useState(null);

    const navSections  = [
        {id:1,'name':'Inicio','icon':`${iHome}`},
        {id:2,'name':'Pedidos','icon':`${iOrder}`},
        {id:3,'name':'Clientes','icon':`${iClient}`},
        {id:4,'name':'Informes','icon':`${iHome}`},
        {id:5,'name':'Empleados','icon':`${iHome}`},
        {id:6,'name':'Proveedores','icon':`${iHome}`}
    ];

    /* Tailwinds Designs of the links */
    const linkNotVisit = "flex items-center justify-start w-full p-3 my-2 font-sans font-thin text-lTextMut transition-colors duration-200 dark:text-gray-200 hover:text-contrast cursor-pointer";

    return (

    <div className="relative hidden h-screen shadow-lg lg:block w-auto">
        <div className="h-full bg-lContainer dark:bg-dContainer">
            <div className="flex items-center justify-center pt-6">
                <img src={iLogo} alt="Logotipo de la empresa Afautos SAS" />
            </div>

            <nav className="mt-6">
                {navSections.map((value) => (
                    <a key={value.id} className={visit === value.id 
                    ?
                    "flex items-center justify-start w-full p-4 my-2 font-thin text-lTextPri transition-colors duration-200 border-r-4 border-contrast bg-gradient-to-r from-white to-contrast dark:from-gray-700 dark:to-gray-800 dark:text-dTextImp"
                    : linkNotVisit
                    }
                     onClick={()=>setVisit(value.id)}>
                        <span className="text-left">
                            <img src={value.icon} alt={`Enlace para ir a ${value.name}`}/>
                        </span>
                        <span className="mx-4 text-sm font-normal">
                            {value.name}
                        </span>
                    </a>
                    
                ))
                }
                    <a className={` mt-6 ${linkNotVisit}`}>
                        <span className="text-left">
                            <img src={iHome} alt='Enlace para ir a cerrar sesion'/>
                        </span>
                        <span className=" mx-4 text-sm font-normal">
                            Cerrar Sesion
                        </span>
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