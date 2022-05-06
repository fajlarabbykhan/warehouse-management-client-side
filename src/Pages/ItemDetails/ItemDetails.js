import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams()
    return (
        <div>
            <h2>Welcome to detail: {itemId}</h2>
            <div className='text-center'>
                <Link to='/addNewItem'>
                    <button className='btn btn-primary'>Add new Item</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetails;