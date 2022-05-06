import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=' text-center m-4'>
            <p><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;