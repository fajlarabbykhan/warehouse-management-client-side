import React from 'react';
import { useNavigate } from 'react-router-dom';
const Item = ({ item }) => {

    const { _id, name, img } = item || {}
    const navigate = useNavigate()
    const naivgateToItem = id => {

        navigate(`/item/${id}`)
    }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded text-center ">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <button onClick={() => { naivgateToItem(_id) }} className="btn btn-primary" >See All</button>
                </div>
            </div>
        </div>
    );
};

export default Item;