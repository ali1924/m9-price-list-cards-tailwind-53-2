import React from 'react';

const Link = (props) => {
    // console.log(props);
    // console.log(props.route);
    const {id,name,path}=props.route;
    return (
        <li className="mr-12 hover:bg-purple-800">
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;