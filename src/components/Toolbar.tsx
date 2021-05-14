/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { COLORS, SIZES } from '../styles/variables';
import { ToolbarContext } from '../context/ToolbarContext';
import BlockButton from './BlockButton';

const CONTAINER_STYLE: CSSObject = {
    margin: 'auto',
};

const LIST_STYLE: CSSObject = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
};

const ITEM_STYLE: CSSObject = {
    height: SIZES.QUADRUPLE,
    width: SIZES.QUADRUPLE,
    backgroundColor: COLORS.GRAY.OFF_WHITE,
    boxShadow: `0 0 0 1px ${COLORS.GRAY.MEDIUM} inset`,
    color: COLORS.GRAY.DARKER,
    position: 'relative',
};

const SELECTED_ITEM_STYLE: CSSObject = {
    ...ITEM_STYLE,
    boxShadow: `0 0 0 ${SIZES.QUARTER}px ${COLORS.PRIMARY.BRIGHT} inset`,
};

const Toolbar: React.FC = () => {
    const toolbarContext = useContext(ToolbarContext);

    const setIndex = (index: number) => {
        toolbarContext.setSelectedIndex(index);
    };

    return (
        <menu css={CONTAINER_STYLE}>
            <ul css={LIST_STYLE}>
                {toolbarContext.toolbar.map((block, index) => 
                    <li key={index} css={index === toolbarContext.selectedIndex ? SELECTED_ITEM_STYLE : ITEM_STYLE}>
                        <BlockButton index={index} onClick={() => setIndex(index)} block={block} />
                    </li>
                )}
            </ul>
        </menu>
    );
};

export default Toolbar;
