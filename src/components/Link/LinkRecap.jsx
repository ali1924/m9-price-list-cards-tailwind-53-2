import React from 'react';

const LinkRecap = (props) => {
    const { id, name, path } = props.route;
    return (
        <li className='mr-12 hover:bg-purple-600'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default LinkRecap;