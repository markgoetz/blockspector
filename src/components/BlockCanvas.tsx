/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useRef } from 'react';
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useGetBlocks } from '../context/BuildContext';
import BlockList from './BlockList';

extend({ OrbitControls });

type BlockCanvasInternalProps = {
};

const BlockCanvasInternal: React.FC<BlockCanvasInternalProps> = () => {
    const controls = useRef<OrbitControls>();
    const { camera, gl: { domElement } } = useThree();
    const getBlocks = useGetBlocks();
    const blocks = getBlocks();

    useFrame(
        () => {
            controls.current?.update();
        }
    ); 


    return (
        <React.Fragment>
            <orbitControls
                ref={controls}
                args={[camera, domElement]}
            />
            <BlockList blocks={blocks} />
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
