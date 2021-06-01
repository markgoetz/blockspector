import React from 'react';
import { COLORS } from '../../styles/variables';

type Props = {
    y: number,
};

const Background: React.FC<Props> = ({ y }) => {
    return (
        <mesh
            visible
            position={[0, y, 0]}
        >
            <boxGeometry args={[2000, 1, 2000]} />
            <meshBasicMaterial attach="material" color={COLORS.GRAY.LIGHT} />
        </mesh>
    );
};

export default Background;
