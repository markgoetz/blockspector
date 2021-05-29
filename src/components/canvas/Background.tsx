import React from 'react';

type Props = {
    z: number,
};

const Background: React.FC<Props> = ({ z }) => {
    return (
        <mesh
            visible
            position={[0, 0, z]}
        >
            <planeBufferGeometry attach="geometry" args={[200, 200, 1, 1]} />
            <meshBasicMaterial attach="material" color="white" />
        </mesh>
    )
};

export default Background;
