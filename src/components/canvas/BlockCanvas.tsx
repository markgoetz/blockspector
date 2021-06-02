/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useRef } from 'react';
import {
    Canvas,
    extend,
    useFrame,
    useThree,
    ThreeEvent,
} from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import BlockList from './BlockList';
import PositionedBlock from '../../definitions/PositionedBlock';
import Background from './Background';

extend({ OrbitControls });

type InternalProps = {
    blocks: PositionedBlock[];
    onBlockClick: (e: ThreeEvent<MouseEvent>, block: PositionedBlock) => void;
};

const BlockCanvasInternal: React.FC<InternalProps> = ({
    blocks,
    onBlockClick,
}) => {
    const controls = useRef<OrbitControls>();
    const {
        camera,
        gl: { domElement },
    } = useThree();
    useFrame(() => {
        controls.current?.update();
    });

    return (
        <React.Fragment>
            <orbitControls
                ref={controls}
                args={[camera, domElement]}
                screenSpacePanning={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={0.002}
            />
            <Background y={-1} />
            <BlockList blocks={blocks} onBlockClick={onBlockClick} />
        </React.Fragment>
    );
};

const CANVAS_STYLE: CSSObject = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
};

type CanvasProps = {
    blocks: PositionedBlock[];
    onCanvasClick: () => void;
    onBlockClick: (e: ThreeEvent<MouseEvent>, block: PositionedBlock) => void;
};

const BlockCanvas: React.FC<CanvasProps> = ({
    blocks,
    onCanvasClick,
    onBlockClick,
}) => {
    return (
        <div onClick={onCanvasClick} css={CANVAS_STYLE}>
            <Canvas id="block-canvas">
                <BlockCanvasInternal
                    blocks={blocks}
                    onBlockClick={onBlockClick}
                />
            </Canvas>
        </div>
    );
};

export default BlockCanvas;
