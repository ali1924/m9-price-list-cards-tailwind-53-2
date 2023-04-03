import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => setPhones(data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                // console.log(loadedData);
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    // console.log(parts[1]);
                    const price = parseInt(parts[1]);
                    // console.log(price);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price:price
                    }
                    return phoneInfo;
                })
                console.log(phoneData);
            });
    }, [])

    // console.log(phones);
    return (
        <div>

        </div>
    );
};

export default PhoneBar;