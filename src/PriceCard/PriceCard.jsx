import React from 'react';

const PriceCard = (props) => {
    // console.log(props.price);
    const { name, features, prices } = props.price;
    return (
        <div>
            <h2>
                <span className='text-purple-900 text-5xl font-extrabold'>{prices.monthly}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold'>{name}</h5>
        </div>
    );
};

export default PriceCard;