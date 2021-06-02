import React, { useState } from 'react';
import { Vector3 } from 'three';
import { ThreeEvent } from '@react-three/fiber';

import { useSelectedBlockId } from '../context/ToolbarContext';
import PositionedBlock from '../definitions/PositionedBlock';
import { DELETE_ID } from '../constants/blocks';
import createBlock from '../lib/createBlock';

type Props = {
    children: (
        blocks: PositionedBlock[],
        onCanvasClick: () => void,
        onBlockClick: (
            e: ThreeEvent<MouseEvent>,
            block: PositionedBlock,
        ) => void,
    ) => JSX.Element;
};

const BuildState: React.FC<Props> = (props) => {
    const selectedBlockId = useSelectedBlockId();
    const [blocks, setBlocks] = useState<PositionedBlock[]>([]);

    const isDeleteSelected = selectedBlockId === DELETE_ID;

    const onCanvasClick = () => {
        if (
            !isDeleteSelected &&
            selectedBlockId != null &&
            blocks.length === 0
        ) {
            const block = createBlock(selectedBlockId, new Vector3(0, 0, 0));
            setBlocks([...blocks, block]);
        }
    };

    const onBlockClick = (
        e: ThreeEvent<MouseEvent>,
        block: PositionedBlock,
    ) => {
        e.stopPropagation();

        if (selectedBlockId == null) {
            return;
        }

        if (e.face == null) {
            return;
        }

        if (isDeleteSelected) {
            setBlocks(blocks.filter((b) => b.uuid !== block.uuid));
            return;
        }

        const objectPosition = new Vector3(
            e.object.position.x,
            e.object.position.y,
            e.object.position.z,
        );
        const newPosition = objectPosition.add(e.face.normal);

        if (blocks.some((block) => block.position === newPosition)) {
            return;
        }

        const newBlock = createBlock(selectedBlockId as string, newPosition);
        setBlocks([...blocks, newBlock]);
    };

    return props.children(blocks, onCanvasClick, onBlockClick);
};

export default BuildState;
