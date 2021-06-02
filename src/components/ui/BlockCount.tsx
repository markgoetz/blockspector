/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import PositionedBlock from '../../definitions/PositionedBlock';

type Props = {
    blocks: PositionedBlock[];
};

const BlockCount: React.FC<Props> = ({ blocks }) => {
    const blocksByType = blocks.reduce((previous, block) => {
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

    console.log(blocksByType);

    return <div>block count</div>;
};

export default BlockCount;
