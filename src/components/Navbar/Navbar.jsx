import React, { useState } from 'react';
import Link from '../Link/Link';
import { BeakerIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
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

        <nav className='bg-purple-400'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {
                        open === true ?
                            <XMarkIcon className="h-6 w-6 text-purple-500" />
                            : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-500 ${open?'top-6':'-top-36'}`}>
                {
                    // routes.map(route => <li>{route.name}</li>)
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;