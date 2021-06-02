/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/react';
import React from 'react';
import { SIZES } from '../../styles/variables';
import PositionedBlock from '../../definitions/PositionedBlock';
import BLOCKS from '../../constants/blocks';

type Props = {
    blocks: PositionedBlock[];
};

const TABLE_STYLE: CSSObject = {
    width: '100%',
};

const CELL_STYLE: CSSObject = {
    verticalAlign: 'middle',
};

const COUNT_CELL_STYLE: CSSObject = {
    ...CELL_STYLE,
    textAlign: 'right',
};

const IMAGE_STYLE: CSSObject = {
    width: SIZES.DOUBLE,
    height: SIZES.DOUBLE,
};

const getBlocksByType = (blocks: PositionedBlock[]) => {
    return blocks.reduce((previous, block) => {
        if (previous[block.blockId] == null) {
            return {
                ...previous,
                [block.blockId]: 1,
            };
        }

        return {
            ...previous,
            [block.blockId]: previous[block.blockId] + 1,
        };
    }, {} as Record<string, number>);
};

const BlockCount: React.FC<Props> = ({ blocks }) => {
    const blocksByType = getBlocksByType(blocks);

    return (
        <table css={TABLE_STYLE} cellSpacing={0} cellPadding={0}>
            {Object.keys(blocksByType).map((blockId) => {
                const count = blocksByType[blockId];
                const block = BLOCKS.find((block) => block.id === blockId);
                if (block == null) {
                    throw new Error(`Unknown block ID ${blockId}`);
                }

                return (
                    <tr>
                        <td css={CELL_STYLE}>
                            <img
                                src={`/assets/textures/${block.imageUrl}`}
                                css={IMAGE_STYLE}
                            />
                        </td>
                        <td css={CELL_STYLE}>{block.name}</td>
                        <td css={COUNT_CELL_STYLE}>x {count}</td>
                    </tr>
                );
            })}
        </table>
    );
};

export default BlockCount;
