/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { DELETE_INDEX } from '../../constants/blocks';
import { useUpdateSelectedIndex } from '../../context/ToolbarContext';
import { SIZES } from '../../styles/variables';

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
    gridRow: '1 / span 4',
};

const TOOLBAR_STYLE: CSSObject = {
    gridArea: 'toolbar',
};

const FOOTER_STYLE: CSSObject = {
    gridArea: 'footer',
};

const NUMBER_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const UIGrid: React.FC<Props> = ({
    header,
    sidebar,
    canvas,
    toolbar,
    footer,
}) => {
    const updateSelectedIndex = useUpdateSelectedIndex();

    const onKeyup = (e: React.KeyboardEvent) => {
        if (NUMBER_KEYS.includes(e.key)) {
            updateSelectedIndex(NUMBER_KEYS.indexOf(e.key));
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
            updateSelectedIndex(DELETE_INDEX);
        }
    };


    return (
        <div css={GRID_STYLE} onKeyUp={onKeyup}>
            <div css={HEADER_STYLE}>{header}</div>
            <div css={SIDEBAR_STYLE}>{sidebar}</div>
            <div css={CANVAS_STYLE}>{canvas}</div>
            <div css={TOOLBAR_STYLE}>{toolbar}</div>
            <div css={FOOTER_STYLE}>{footer}</div>
        </div>
    );
};

export default UIGrid;
