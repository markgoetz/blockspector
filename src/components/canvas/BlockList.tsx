import React, { Suspense } from 'react';
import Spacer from './Spacer';
import PlacedBlock from './PlacedBlock';
import PositionedBlock from '../../definitions/PositionedBlock';
import { SPACER_ID } from '../../constants/blocks';
import { ThreeEvent } from '@react-three/fiber';

type Props = {
    blocks: PositionedBlock[];
    onBlockClick: (e: ThreeEvent<PointerEvent>) => void;
};

const BlockList: React.FC<Props> = ({ blocks, onBlockClick }) => {
    return (
        <group>
            {blocks.map((block) => {
                return block.blockId !== SPACER_ID ? (
                    <Suspense fallback={null} key={block.uuid}>
                        <PlacedBlock block={block} onClick={onBlockClick} />
                    </Suspense>
                ) : (
                    <Spacer position={block.position} key={block.uuid} />
                );
            })}
        </group>
    );
};

export default BlockList;
