import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
const Items = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    if (items.length) {
        items.length = 6
    }
    return (
        <div className="container">
            <h1 className='text-center m-2'>Items ({items.length})</h1>
            <div className='row  mt-4'>
                {
                    items.map(item => <Item key={item.id} item={item} ></Item>)
                }

            </div>

            <div className='text-center'><Link to="/" className='btn btn-primary '>Load More...</Link></div>
        </div>
    );
};

export default Items;