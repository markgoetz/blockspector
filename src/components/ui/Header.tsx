/** @jsx jsx */
import { jsx } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';
import React from 'react';

const HEADER_STYLE: CSSObject = {
    position: 'relative',
    zIndex: 1,
};

const Header: React.FC = () => {
    return (
        <header css={HEADER_STYLE}>
            <h1>
                <img
                    src="/assets/images/logo.svg"
                    alt="Cubicount"
                    width="359"
                    height="64"
                />
            </h1>
            <h2>A block placement preview tool for Minecraft</h2>
        </header>
    );
};

export default Header;
