/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three';

import {
    ToolbarContext,
    useSelectedBlockId,
} from '../../context/ToolbarContext';
import BlockList from './BlockList';
import { DELETE_ID } from '../../constants/blocks';
import PositionedBlock from '../../definitions/PositionedBlock';
import createBlock from '../../lib/createBlock';

extend({ OrbitControls });

type InternalProps = {
    blocks: PositionedBlock[];
};

const BlockCanvasInternal: React.FC<InternalProps> = ({ blocks }) => {
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
            <orbitControls ref={controls} args={[camera, domElement]} />
            <BlockList blocks={blocks} />
        </React.Fragment>
    );
};

const CANVAS_STYLE: CSSObject = {
    height: '100%',
};

const BlockCanvas: React.FC = () => {
    const ContextBridge = useContextBridge(ToolbarContext);
    const selectedBlockId = useSelectedBlockId();
    const [blocks, setBlocks] = useState<PositionedBlock[]>([]);

    const onCanvasClick = () => {
        if (
            selectedBlockId != null &&
            selectedBlockId !== DELETE_ID &&
            blocks.length === 0
        ) {
            const block = createBlock(selectedBlockId, new Vector3(0, 0, 0));
            setBlocks([...blocks, block]);
        }
    };

    return (
        <div onClick={onCanvasClick} css={CANVAS_STYLE}>
            <Canvas id="block-canvas">
                <ContextBridge>
                    <BlockCanvasInternal blocks={blocks} />
                </ContextBridge>
            </Canvas>
        </div>
    );
};

export default BlockCanvas;
