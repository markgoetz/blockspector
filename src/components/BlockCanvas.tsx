/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Spacer from './Spacer';
import { Vector3, Object3D } from 'three';

extend({ OrbitControls });

type BlockCanvasInternalProps = {
};

const BlockCanvasInternal: React.FC<BlockCanvasInternalProps> = () => {
    const spacerPosition = new Vector3(0, 0, 0);
    const spacerRef = useRef<Object3D>(null);
    const { camera, gl: { domElement } } = useThree();
    const controls = useRef<OrbitControls>();
    useFrame(
        () => {
            controls.current?.update();
        }
    ); 


    return (
        <React.Fragment>
            <ambientLight intensity={.5} />
            <orbitControls
                ref={controls}
                args={[camera, domElement]}
            />
            <Spacer position={spacerPosition} ref={spacerRef} />
        </React.Fragment>
    );
};

const BlockCanvas: React.FC = () => {
    return (
        <Canvas>
            <BlockCanvasInternal />
        </Canvas>
    );
};

export default BlockCanvas;
