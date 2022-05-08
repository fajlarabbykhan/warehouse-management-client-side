import React, { useEffect, useState } from 'react';
import Item from '../Item/Item'
import PageTitle from '../../Shared/PageTitel/PageTitle'
const AllItems = () => {

    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className="container">
            <PageTitle title="Items"></PageTitle>

            {/* <h1 className='text-center m-2'>Items ({items.length})</h1> */}
            <div className='row  mt-4'>
                {
                    items.map(item => <Item key={item._id} item={item} ></Item>)
                }

            </div>
        </div>
    );
};

export default AllItems;