import React from 'react';

const Navbar = () => {
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About Us',
            path: '/about'
        },
        {
            id: 3,
            name: 'Our Services',
            path: '/services'
        },
        {
            id: 4,
            name: 'Contact Us',
            path: '/contact'
        }
    ];

    return (
        <nav>
            {
                routes.map(route => <li>{route.name}</li>)
            }
        </nav>
    );
};

export default Navbar;