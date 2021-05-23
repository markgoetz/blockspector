/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useRef, useState } from 'react';
import { Vector3 } from 'three';
import { Canvas, extend, useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import {
    useSelectedBlockId,
} from '../../context/ToolbarContext';
import BlockList from './BlockList';
import { DELETE_ID } from '../../constants/blocks';
import PositionedBlock from '../../definitions/PositionedBlock';
import createBlock from '../../lib/createBlock';

extend({ OrbitControls });

type InternalProps = {
    blocks: PositionedBlock[];
    onBlockClick: (e: ThreeEvent<MouseEvent>, block: PositionedBlock) => void;
};

const BlockCanvasInternal: React.FC<InternalProps> = ({ blocks, onBlockClick }) => {
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
            <BlockList
                blocks={blocks}
                onBlockClick={onBlockClick}
            />
        </React.Fragment>
    );
};

const CANVAS_STYLE: CSSObject = {
    height: '100%',
};

const BlockCanvas: React.FC = () => {
    const selectedBlockId = useSelectedBlockId();
    const [blocks, setBlocks] = useState<PositionedBlock[]>([]);

    const isDeleteSelected = selectedBlockId === DELETE_ID;
    const isBlockSelected = !isDeleteSelected && selectedBlockId != null;

    const onCanvasClick = () => {
        if (
            isBlockSelected &&
            blocks.length === 0
        ) {
            const block = createBlock(selectedBlockId as string, new Vector3(0, 0, 0));
            setBlocks([...blocks, block]);
        }
    };

    const onBlockClick = (e: ThreeEvent<MouseEvent>, clickedBlock: PositionedBlock) => {
        if (selectedBlockId == null) {
            return;
        }

        if (e.face == null) {
            return;
        }

        if (selectedBlockId === DELETE_ID) {
            setBlocks(blocks.filter(b => b.uuid !== clickedBlock.uuid));
            return;
        }

        const objectPosition = new Vector3(e.object.position.x, e.object.position.y, e.object.position.z);
        const newPosition = objectPosition.add(e.face.normal);

        if (blocks.some(block => block.position === newPosition)) {
            return;
        }

        const block = createBlock(selectedBlockId as string, newPosition);
        setBlocks([...blocks, block]);
    };

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
