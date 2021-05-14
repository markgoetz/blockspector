/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { SIZES } from '../styles/variables';
import BLOCKS from '../constants/blocks';
import { useUpdateToolbarItem } from '../context/ToolbarContext';
import BlockButton from './BlockButton';

const GRID_STYLE: CSSObject = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: SIZES.BASE,
};

const ITEM_STYLE: CSSObject = {
    width: SIZES.QUADRUPLE,
    height: SIZES.QUADRUPLE,
};

const BlockGrid: React.FC = () => {
    const updateToolbarItem = useUpdateToolbarItem();

    return (
        <ul css={GRID_STYLE}>
            {BLOCKS.map(block => (
                <li key={block.id} css={ITEM_STYLE}>
                    <BlockButton block={block} onClick={() => updateToolbarItem(block)} />
                </li>
            ))}
        </ul>
    );
};

export default BlockGrid;
