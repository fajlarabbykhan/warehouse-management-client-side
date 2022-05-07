import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'
const AllItems = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="container">
            {/* <h1 className='text-center m-2'>Items ({items.length})</h1> */}
            <div className='row  mt-4'>
                {
                    items.map(item => <Item key={item.id} item={item} ></Item>)
                }

            </div>
        </div>
    );
};

export default AllItems;