import React from 'react';
import './styles.css';
import Logo from './logo.png';

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Logo" height="100px"/>
                </div>
            </div>
        </header>
    );
};

export default Header;
