import React, { useState } from 'react';
import { Vector3 } from 'three';
import { ThreeEvent } from '@react-three/fiber';
import { COLORS } from '../../styles/variables';
import { DELETE_ID } from '../../constants/blocks';
import { useSelectedBlockId } from '../../context/ToolbarContext';

type Props = {
    position: Vector3;
};

const Spacer: React.FC<Props> = ({ position }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const selectedId = useSelectedBlockId();

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

    const color = isHighlighted ? COLORS.SECONDARY : COLORS.PRIMARY.BRIGHT;


    return (
        <mesh
            visible
            position={[position.x, position.y, position.z]}
            onPointerOver={onPointerOver}
            onPointerLeave={onPointerLeave}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
                attach="material"
                color={color}
                wireframe={true}
            />
        </mesh>
    );
};

export default Spacer;
