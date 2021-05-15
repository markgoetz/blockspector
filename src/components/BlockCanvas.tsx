/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { Suspense, useRef } from 'react';
import { Canvas, extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

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
    const [colorMap] = useLoader(TextureLoader, ['/assets/textures/andesite.png']);

    return (
        <Canvas>
            <ambientLight intensity={.5} />
            <CameraControls />
            <mesh
                visible
                position={[0, 0, 0]}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </Canvas>
    )
};

export default BlockCanvas;
