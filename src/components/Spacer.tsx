import React from 'react';
import { COLORS } from '../styles/variables';
import { Vector3 } from 'three';

type Props = {
    position: Vector3,
};

const Spacer: React.FC<Props> = ({ position }) => {
    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
                attach="material"
                color={COLORS.PRIMARY.BRIGHT}
                wireframe={true}
            />
        </mesh>
    );
};

export default Spacer;
