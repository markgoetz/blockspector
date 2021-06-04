/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useEffect, useRef } from 'react';
import { DELETE_INDEX } from '../../constants/blocks';
import { useUpdateSelectedIndex } from '../../context/ToolbarContext';
import { SIZES } from '../../styles/variables';

type Props = {
    header: React.ReactNode;
    sidebar: React.ReactNode;
    toolbar: React.ReactNode;
    footer: React.ReactNode;
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
    gridTemplateRows: `${SIZES.QUINTUPLE}px calc(100vh - ${15 * SIZES.BASE}px) ${SIZES.QUADRUPLE}px ${SIZES.BASE}px`,
    gridTemplateColumns: 'max-content 1fr',
    height: '100%',
    maxHeight: '100vh',
};

const HEADER_STYLE: CSSObject = {
    gridArea: 'header',
    zIndex: 1,
};

const SIDEBAR_STYLE: CSSObject = {
    gridArea: 'sidebar',
    zIndex: 1,
    minHeight: 0,
    maxHeight: '100%',
    overflowX: 'visible',
};

const TOOLBAR_STYLE: CSSObject = {
    gridArea: 'toolbar',
    zIndex: 1,
};

const FOOTER_STYLE: CSSObject = {
    gridArea: 'footer',
    zIndex: 1,
};

const NUMBER_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const UIGrid: React.FC<Props> = ({ header, sidebar, toolbar, footer }) => {
    const updateSelectedIndex = useUpdateSelectedIndex();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.focus();
    }, []);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (NUMBER_KEYS.includes(e.key)) {
            updateSelectedIndex(NUMBER_KEYS.indexOf(e.key));
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
            updateSelectedIndex(DELETE_INDEX);
        }
    };

    return (
        <div css={GRID_STYLE} onKeyDown={onKeyDown} ref={ref} tabIndex={-1}>
            <section css={HEADER_STYLE}>{header}</section>
            <section css={SIDEBAR_STYLE}>{sidebar}</section>
            <section css={TOOLBAR_STYLE}>{toolbar}</section>
            <section css={FOOTER_STYLE}>{footer}</section>
        </div>
    );
};

export default UIGrid;
