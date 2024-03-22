import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuLine } from 'react-icons/ri';

const NavBar = ({ icon, links }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <nav className="bg-box-dark rounded-xl">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <RiMenuLine className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} />
                            <RiMenuLine className={`hidden h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`} />
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center text-gray-200">
                        {React.cloneElement(icon, { className: "h-6 w-6" })}
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <ul className="flex space-x-4">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.to} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link to={link.to} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
