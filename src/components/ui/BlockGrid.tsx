/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useRef } from 'react';
import { SIZES } from '../../styles/variables';
import BLOCKS from '../../constants/blocks';
import { useUpdateToolbarItem } from '../../context/ToolbarContext';
import BlockButton from './BlockButton';

const GRID_STYLE: CSSObject = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: SIZES.BASE,
    paddingRight: SIZES.BASE, // account for scrollbar
    overflowX: 'hidden',
    overflowY: 'auto',
    maxHeight: '100%',
};

type Props = {
    query: string;
};

const BlockGrid: React.FC<Props> = ({ query }) => {
    const gridRef = useRef<HTMLUListElement>(null);
    const updateToolbarItem = useUpdateToolbarItem();
    const queriedBlocks = BLOCKS.filter((block) =>
        block.name.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <ul css={GRID_STYLE} ref={gridRef}>
            {queriedBlocks.map((block) => (
                <li key={block.id}>
                    <BlockButton
                        imageUrl={`/assets/textures/${block.imageUrl}`}
                        selected={false}
                        onClick={() => updateToolbarItem(block.id)}
                        name={block.name}
                        containerRef={gridRef}
                    />
                </li>
            ))}
        </ul>
    );
};

export default BlockGrid;
