import React from 'react';
import Logo from '../../../images/logo.jpg'
import ActiveLink from '../ActiveLink/ActiveLink'
const Header = () => {
    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-light  fs-5">
                <div className="container">
                    <ActiveLink className="navbar-brand" to="/"><img src={Logo} alt="" /></ActiveLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <ActiveLink className="nav-link active" aria-current="page" to="/">Home</ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink className="nav-link" to="/allItems">Items</ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink className="nav-link" to="/blogs">Blogs</ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink className="nav-link" to="/about">About</ActiveLink>
                            </li>
                        </ul>
                        <span className="fs-5">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <ActiveLink className="nav-link active" aria-current="page" to="/manageItems">Manage Items</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink className="nav-link" to="/addItems">Add Item</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink className="nav-link" to="/myItems">My items</ActiveLink>
                                </li>
                                <li className="nav-item">
                                    <ActiveLink className="nav-link" to="/login">Login</ActiveLink>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;