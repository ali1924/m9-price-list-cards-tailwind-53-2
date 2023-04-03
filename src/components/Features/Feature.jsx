import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    // console.log(feature)
    return (
        // <li>{feature}</li>
        <div className='flex items-center'>
            <CheckCircleIcon className='h-4 w-4 text-purple-400'></CheckCircleIcon>
            <span className='pl-2'>{feature}</span>
        </div>
    );
};

export default Feature;