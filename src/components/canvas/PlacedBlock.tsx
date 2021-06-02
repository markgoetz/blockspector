import React from 'react';
import { ThreeEvent } from '@react-three/fiber';
import PositionedBlock from '../../definitions/PositionedBlock';
import BLOCKS from '../../constants/blocks';
import { COLORS } from '../../styles/variables';
import Block from '../../definitions/Block';
import PlacedSimpleBlock from './PlacedSimpleBlock';

type Props = {
    block: PositionedBlock;
    onClick: (e: ThreeEvent<MouseEvent>) => void;
    isHighlighted: boolean;
    onMouseOver: () => void;
};

const getElement = (block: Block, color: string) => {
    switch (block.type) {
        case 'simple': {
            return <PlacedSimpleBlock block={block} color={color} />
        }
    }
};

const PlacedBlock: React.FC<Props> = ({
    block,
    onClick,
    isHighlighted,
    onMouseOver,
}) => {
    const { position, blockId } = block;

    const referenceBlock = BLOCKS.find((b) => b.id === blockId);
    if (referenceBlock == null) {
        throw new Error(`Unable to find block ${blockId}.`);
    }
    const color = isHighlighted ? COLORS.SECONDARY : 'gray';
    const element = getElement(referenceBlock, color);

    const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        onMouseOver();
    };

    const onPointerLeave = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
    };



    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
            onPointerOver={onPointerOver}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
        >
            {element}
        </mesh>
    );
};

export default PlacedBlock;
