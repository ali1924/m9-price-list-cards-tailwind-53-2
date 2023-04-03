import React from 'react';
import Feature from '../components/Features/Feature';

const PriceCard = (props) => {
    // console.log(props.price);
    const { name, features, price } = props.price;
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-purple-900 text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl font-bold text-white'>/month</span>
            </h2>
            <h5 className='text-2xl font-bold text-center my-6'>{name}</h5>
            <p className='underline text-white text-2xl'>Features:</p>
            {
                // features.map(feature => <li>{feature}</li>)
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full bg-green-500 py-2 rounded-md text-white mt-auto hover:bg-orange-400'>Buy Now</button>
        </div>
    );
};

export default PriceCard;