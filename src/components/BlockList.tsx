import React, { Suspense } from 'react';
import Spacer from './Spacer';
import PlacedBlock from './PlacedBlock';
import PositionedBlock from '../definitions/PositionedBlock';
import { SPACER_ID } from '../constants/blocks';

type Props = {
    blocks: PositionedBlock[];
};

const BlockList: React.FC<Props> = ({ blocks }) => {
    return (
        <React.Fragment>
            {blocks.map(block => {
                return block.blockId !== SPACER_ID
                    ? <Suspense fallback={null} key={block.uuid}><PlacedBlock block={block} /></Suspense>
                    : <Spacer position={block.position} key={block.uuid} />;
            })}
        </React.Fragment>
    )
};

export default BlockList;