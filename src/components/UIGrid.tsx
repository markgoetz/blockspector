/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { SIZES } from '../styles/variables';

type Props = {
    header: React.ReactNode,
    sidebar: React.ReactNode,
    toolbar: React.ReactNode,
    footer: React.ReactNode,
};

const GRID_STYLE: CSSObject = {
    display: 'grid',
    padding: SIZES.STANDARD,
    gridGap: SIZES.STANDARD,
    gridTemplateAreas: `
        "header header header"
        "sidebar unused unused"
        "toolbar toolbar toolbar"
        "footer footer footer"
    `,
    gridTemplateRows: 'auto 1fr auto auto',
    gridTemplateColumns: '1fr auto 1fr',
    height: '100%',
};

const HEADER_STYLE: CSSObject = {
    gridArea: 'header',
};

const SIDEBAR_STYLE: CSSObject = {
    gridArea: 'sidebar',
};

const TOOLBAR_STYLE: CSSObject = {
    gridArea: 'toolbar',
};

const FOOTER_STYLE: CSSObject = {
    gridArea: 'footer',
};

const UIGrid: React.FC<Props> = ({ header, sidebar, toolbar, footer }) => {
    return (
        <div css={GRID_STYLE}>
            <div css={HEADER_STYLE}>{header}</div>
            <div css={SIDEBAR_STYLE}>{sidebar}</div>
            <div css={TOOLBAR_STYLE}>{toolbar}</div>
            <div css={FOOTER_STYLE}>{footer}</div>
        </div>
    );
};

export default UIGrid;
