import React from 'react';

const Loading = () => {
    return (
        <div style={{ height: '400px' }} className='w-100 d-flex justify-content-center align-items-center'>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;