/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { SIZES } from '../styles/variables';

type Props = {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    toolbar: React.ReactNode;
    footer: React.ReactNode;
    canvas: React.ReactNode;
};

const GRID_STYLE: CSSObject = {
    display: 'grid',
    padding: SIZES.BASE,
    gridGap: SIZES.BASE,
    gridTemplateAreas: `
        "header header"
        "sidebar unused"
        "toolbar toolbar"
        "footer footer"
    `,
    gridTemplateRows: 'auto 1fr auto auto',
    gridTemplateColumns: 'max-content 1fr',
    height: '100%',
};

const HEADER_STYLE: CSSObject = {
    gridArea: 'header',
};

const SIDEBAR_STYLE: CSSObject = {
    gridArea: 'sidebar',
    zIndex: 1,
};

const CANVAS_STYLE: CSSObject = {
    gridColumn: '1 / span 2',
    gridRow: '2 / span 1',
};

const TOOLBAR_STYLE: CSSObject = {
    gridArea: 'toolbar',
};

const FOOTER_STYLE: CSSObject = {
    gridArea: 'footer',
};

const UIGrid: React.FC<Props> = ({
    header,
    sidebar,
    canvas,
    toolbar,
    footer,
}) => {
    return (
        <div css={GRID_STYLE}>
            <div css={HEADER_STYLE}>{header}</div>
            <div css={SIDEBAR_STYLE}>{sidebar}</div>
            <div css={CANVAS_STYLE}>{canvas}</div>
            <div css={TOOLBAR_STYLE}>{toolbar}</div>
            <div css={FOOTER_STYLE}>{footer}</div>
        </div>
    );
};

export default UIGrid;
