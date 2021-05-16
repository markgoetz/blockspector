import React from 'react';
import { COLORS } from '../styles/variables';
import { Object3D, Vector3 } from 'three';

type Props = {
    position: Vector3,
    ref: React.RefObject<Object3D>;
};

const Spacer: React.FC<Props> = ({ position, ref }) => {
    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
        >
            <boxGeometry args={[1, 1, 1]} ref={ref} />
            <meshBasicMaterial
                attach="material"
                color={COLORS.PRIMARY.BRIGHT}
                wireframe={true}
            />
        </mesh>
    );
};

export default Spacer;
