import React, { useState } from 'react';
import LinkRecap from '../Link/LinkRecap';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavbarRecap = () => {
    const [isOpen, setIsOpen] = useState(false);
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/home'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Products',
            path: '/products'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        },
    ];
    return (
        <nav>
            <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                <span>
                    {
                        isOpen === true ?
                            <XMarkIcon className='h-6 w-6 text-red-400'></XMarkIcon>
                            : <Bars3Icon className='h-6 w-6 text-black-300'></Bars3Icon>
                    }
                </span>


            </div>
            <ul className={`md:flex absolute duration-500 md:static bg-slate-300 ${isOpen?'top-6':'-top-36'}`}>
                {
                    routes.map(route => <LinkRecap
                        key={route.id}
                        route={route}
                    ></LinkRecap>)
                }
            </ul>
        </nav>
    );
};

export default NavbarRecap;