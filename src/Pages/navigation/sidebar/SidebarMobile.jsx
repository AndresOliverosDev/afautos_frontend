import { Card, Icon } from "@tremor/react";
import { RiCloseLine, RiLogoutCircleLine, RiMenuLine, RiMoonLine, RiNotification3Line, RiSettings2Line, RiSunFoggyLine } from "react-icons/ri";
import { CircleAvatar } from "../../../components/UI";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { mainMenu } from "./data/mainMenu";
import { Accordion } from "../../../components/UI"
import useAccordion from "../../../hooks/ui/useAccordion";

const MobileNavigation = ({ user }) => {
    const [openMenu, setOpenMenu] = useState(true);
    const [theme, setTheme] =useState('dark')
    const { openAccordion, toggleAccordion } = useAccordion();

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

        // Cambiar la clase en el elemento <html>
        const htmlElement = document.documentElement;
        if (newTheme === 'dark') {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
    };

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Card className="flex justify-between lg:hidden p-1 text-tremor-default dark:text-gray-300 font-semibold h-12">
                        <Disclosure.Button>
                            <Icon
                                icon={openMenu ? RiCloseLine : RiMenuLine}
                                variant="shadow"
                                color={openMenu ? "red-200" : ""}
                                onClick={() => setOpenMenu(!openMenu)}
                            />
                        </Disclosure.Button>
                        <div className="flex items-center pr-2 gap-2">
                            <Link to="/notificaciones">
                                <Icon icon={RiNotification3Line} />
                            </Link>
                            <CircleAvatar firstWord={user.names} secondWord={user.lastName} />
                        </div>
                    </Card>

                    <Disclosure.Panel>
                        <Card className="opacity-90">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xs text-gray-400">MENU PRINCIPAL</h2>
                                {
                                    mainMenu.map((item, index) => (
                                        <Accordion
                                            key={index}
                                            title={item.header}
                                            state={openAccordion === `${item.header}`}
                                            items={item.links}
                                            handle={() => toggleAccordion(item.header)}
                                            icon={item.icon}
                                        />
                                    ))
                                }
                            </div>
                            <div className="dark:text-gray-400 text-gray-600">
                                <h2 className="text-xs text-gray-400 mb-2">AJUSTES</h2>
                                <Link to="/ajustes" className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                                    <Icon icon={RiSettings2Line} />
                                    <p className="">Ajustes</p>
                                </Link>
                                <Link to='notificaciones' className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5">
                                    <Icon icon={RiNotification3Line} />
                                    <p className="">Notificaciones</p>
                                </Link>
                                <button onClick={() => handleTheme()} className="flex items-center pl-2 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer py-0.5 w-full">
                                    <Icon icon={theme === "dark" ? RiSunFoggyLine : RiMoonLine} className="cursor-pointer" />
                                    <label>
                                        {
                                            theme === "dark" ? "Tema oscuro" : "Tema claro"
                                        }
                                    </label>
                                </button>
                            </div>
                            <Link to='iniciar_sesión' className="pl-2 flex items-center text-red-400 hover:bg-gray-100 hover:dark:bg-gray-600 font-medium rounded-lg cursor-pointer ">
                                <Icon icon={RiLogoutCircleLine} color="red-400" />
                                <p>
                                    Cerrar sesión
                                </p>
                            </Link>
                        </Card>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default MobileNavigation;
