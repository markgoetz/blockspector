/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Spacer from './Spacer';
import { Vector3 } from 'three';

extend({ OrbitControls });

const CameraControls = () => {
    const { camera, gl: { domElement } } = useThree();
    const controls = useRef<OrbitControls>();
    useFrame(() => controls.current?.update()); 
    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
        />
    );
  };

const BlockCanvas: React.FC = () => {
    const spacerPosition = new Vector3(0, 0, 0);

    return (
        <Canvas>
            <ambientLight intensity={.5} />
            <CameraControls />
            <Spacer position={spacerPosition} />
        </Canvas>
    )
};

export default BlockCanvas;
