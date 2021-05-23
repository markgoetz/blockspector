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

const BlockGrid: React.FC = () => {
    const updateToolbarItem = useUpdateToolbarItem();

    return (
        <ul css={GRID_STYLE}>
            {BLOCKS.map((block) => (
                <li key={block.id}>
                    <BlockButton
                        imageUrl={`/assets/textures/${block.imageUrl}`}
                        selected={false}
                        onClick={() => updateToolbarItem(block.id)}
                    />
                </li>
            ))}
        </ul>
    );
};

export default BlockGrid;
