/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';

const year = new Date().getFullYear();
const FOOTER_STYLE: CSSObject = {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
};

const Footer: React.FC = () => {
    return (
        <footer css={FOOTER_STYLE}>
            Copyright &copy;{' '}
            <a href="https://markandrewgoetz.com">Mark Goetz</a>, {year}
        </footer>
    );
};

export default Footer;
