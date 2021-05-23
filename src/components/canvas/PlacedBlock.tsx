import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, ThreeEvent } from '@react-three/fiber';
import PositionedBlock from '../../definitions/PositionedBlock';
import BLOCKS from '../../constants/blocks';
import { COLORS } from '../../styles/variables';

type Props = {
    block: PositionedBlock;
    onClick: (e: ThreeEvent<MouseEvent>) => void;
    isHighlighted: boolean;
    onMouseOver: () => void;
};

const PlacedBlock: React.FC<Props> = ({ block, onClick, isHighlighted, onMouseOver }) => {
    const { position, blockId } = block;

    const referenceBlock = BLOCKS.find((b) => b.id === blockId);
    if (referenceBlock == null) {
        throw new Error(`Unable to find block ${blockId}.`);
    }

    const referenceUrl = `/assets/textures/${referenceBlock.textureUrl}`;
    const [colorMap] = useLoader(TextureLoader, [referenceUrl]);

    const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        onMouseOver();
    };

    const onPointerLeave = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
    };

    const color = isHighlighted ? COLORS.SECONDARY : 'gray';

    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
            onPointerOver={onPointerOver}
            onPointerLeave={onPointerLeave}
            onClick={onClick}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" map={colorMap} color={color} />
        </mesh>
    );
};

export default PlacedBlock;
