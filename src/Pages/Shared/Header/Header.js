import React from 'react';
import Logo from '../../../images/logo.jpg'
import ActiveLink from '../ActiveLink/ActiveLink'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';
const Header = () => {
    const [user, loading] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }
    if (loading) {
        return <Loading></Loading>
    }
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
                            {/* <li className="nav-item">
                                <ActiveLink className="nav-link" to="/about">About</ActiveLink>
                            </li> */}
                        </ul>
                        <span className="fs-5">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    user ?
                                        <li className="nav-item m-2">
                                            <ActiveLink className="nav-link active" aria-current="page" to="/manageItems">Manage Items</ActiveLink>
                                        </li>
                                        :
                                        <li className="nav-item  m-2">

                                        </li>
                                }

                                {
                                    user ?
                                        <li className="nav-item  m-2">
                                            <ActiveLink className="nav-link" to="/addItems">Add Item</ActiveLink>
                                        </li> :
                                        <li className="nav-item  m-2">

                                        </li>
                                }
                                {
                                    user ?
                                        <li className="nav-item  m-2">
                                            <ActiveLink className="nav-link" to="/myItems">My items</ActiveLink>
                                        </li> :
                                        <li className="nav-item  m-2">

                                        </li>
                                }
                                {
                                    user ?
                                        <li className="nav-item  mt-3 link-success">
                                            {user.displayName}
                                        </li> :
                                        <li className="nav-item  m-2">

                                        </li>
                                }
                                {
                                    user ?
                                        <li className="nav-item  m-2" onClick={handleSignOut}>
                                            <ActiveLink className="nav-link" to="/signin">Sign Out</ActiveLink>
                                        </li> :
                                        <li className="nav-item ">
                                            <ActiveLink className="nav-link" to="/signin">Sign in</ActiveLink>
                                        </li>
                                }
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;