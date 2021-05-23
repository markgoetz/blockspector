import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>
                <img
                    src="/assets/images/logo.svg"
                    alt="cubicount"
                    width="359"
                    height="64"
                />
            </h1>
            <h2>A block placement preview tool for Minecraft</h2>
        </header>
    );
};

export default Header;
