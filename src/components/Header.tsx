/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../styles/variables';

const LOGO_STYLE: CSSObject = {
    fontFamily: FONTS.SECONDARY,
    fontSize: SIZES.QUADRUPLE,
    letterSpacing: SIZES.HALF,
    color: COLORS.SECONDARY,
    WebkitTextStroke: `${SIZES.QUARTER}px ${COLORS.GRAY.DARKEST}`,
};

const Header: React.FC = () => {
    return (
        <header>
            <h1 css={LOGO_STYLE}>Blockspector</h1>
            <h2>A block placement preview tool for Minecraft</h2>
        </header>
    );
};

export default Header;
