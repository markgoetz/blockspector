import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { SimpleBlock } from '../../definitions/Block';

type Props = {
    block: SimpleBlock;
    color: string
};

const PlacedSimpleBlock: React.FC<Props> = ({
    block,
    color,
}) => {
    const referenceUrl = `/assets/textures/${block.textureUrl}`;
    const [colorMap] = useLoader(TextureLoader, [referenceUrl]);

    return (
        <React.Fragment>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial attach="material" map={colorMap} color={color} />
        </React.Fragment>
    );
};

export default PlacedSimpleBlock;
