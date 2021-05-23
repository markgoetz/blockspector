/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useGetBlocks } from '../context/BuildContext';
import BlockList from './BlockList';

extend({ OrbitControls });

const BlockCanvasInternal: React.FC = () => {
    const controls = useRef<OrbitControls>();
    const {
        camera,
        gl: { domElement },
    } = useThree();
    const getBlocks = useGetBlocks();
    const blocks = getBlocks();

    useFrame(() => {
        controls.current?.update();
    });

    return (
        <React.Fragment>
            <orbitControls ref={controls} args={[camera, domElement]} />
            <BlockList blocks={blocks} />
        </React.Fragment>
    );
};

const BlockCanvas: React.FC = () => {
    return (
        <Canvas id="block-canvas">
            <BlockCanvasInternal />
        </Canvas>
    );
};

export default BlockCanvas;
