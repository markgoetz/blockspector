import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import PositionedBlock from '../definitions/PositionedBlock';
import BLOCKS from '../constants/blocks';

type Props = {
    block: PositionedBlock;
};

const PlacedBlock: React.FC<Props> = ({ block }) => {
    const { position, blockId } = block;
    const referenceBlock = BLOCKS.find((b) => b.id === blockId);
    if (referenceBlock == null) {
        throw new Error(`Unable to find block ${blockId}.`);
    }

    const referenceUrl = `/assets/textures/${referenceBlock.textureUrl}`;
    const [colorMap] = useLoader(TextureLoader, [referenceUrl]);

    return (
        <mesh visible position={[position.x, position.y, position.z]} onPointerMove={console.log}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" map={colorMap} />
        </mesh>
    );
};

export default PlacedBlock;
