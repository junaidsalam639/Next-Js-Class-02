'use client'
import React, { useState } from 'react';
import productApi from '../userData/ProductData';

export default function DataFecth() {
    const [cards, setCards] = useState([]);
    const submit = async (e) => {
        e.preventDefault();
        let input = document.getElementById('input').value;
        const data = await productApi(input);
        const cardElements = data.products.map((user, index) => (
            <div key={index} className="card w-80 h-full shadow-md border-2 border-gray-200 p-5 rounded-md mt-4 mb-4">
                <img src={user.thumbnail} alt={user.name} className='w-80 h-56 rounded-md shadow-md' />
                <div className="card-info pt-4">
                    <h2><b>Category : </b> {user.category}</h2>
                    <h2><b>Price : </b> {user.price}</h2>
                    <h2><b>Title : </b> {user.title}</h2>
                    <h2><b>Description : </b> {user.description}</h2>
                </div>
            </div>
        ));
        setCards(cardElements);
    }

    return (
        <>
            <div>
                <form onSubmit={submit} className='text-center my-5'>
                    <input type="text" id="input" className="border-2 border-rose-950 focus:outline-none py-1 px-2 rounded-sm" placeholder='search product Name' required />
                    <button type="submit" className='border-2 border-rose-950 py-1 px-2 mx-2 rounded-sm bg-gray-200'>Submit</button>
                </form>
            </div>
            <div className="card-container flex justify-around items-center flex-wrap w-full">
                {cards}
            </div>
        </>
    );
}

