import React, { useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader, ThreeEvent } from '@react-three/fiber';
import PositionedBlock from '../../definitions/PositionedBlock';
import BLOCKS, { DELETE_ID } from '../../constants/blocks';
import { useSelectedBlockId } from '../../context/ToolbarContext';
import { COLORS } from '../../styles/variables';

type Props = {
    block: PositionedBlock;
};

const PlacedBlock: React.FC<Props> = ({ block }) => {
    const { position, blockId } = block;
    const [isHighlighted, setIsHighlighted] = useState(false);
    const selectedId = useSelectedBlockId();

    const referenceBlock = BLOCKS.find((b) => b.id === blockId);
    if (referenceBlock == null) {
        throw new Error(`Unable to find block ${blockId}.`);
    }

    const referenceUrl = `/assets/textures/${referenceBlock.textureUrl}`;
    const [colorMap] = useLoader(TextureLoader, [referenceUrl]);

    const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
        if (selectedId === DELETE_ID) {
            setIsHighlighted(true);
        } else {
            // highlight the face
        }

    };

    const onPointerLeave = () => {
        setIsHighlighted(false);
    };

    const color = isHighlighted ? COLORS.SECONDARY : 'white';

    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
            onPointerOver={onPointerOver}
            onPointerLeave={onPointerLeave}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" map={colorMap} color={color} />
        </mesh>
    );
};

export default PlacedBlock;
