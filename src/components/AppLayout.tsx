/** @jsx jsx */
import { Global, jsx } from '@emotion/react';
import React, { Suspense, useState } from 'react';
import { Vector3 } from 'three';
import { ThreeEvent } from '@react-three/fiber';

import BlockCanvas from './canvas/BlockCanvas';
import Footer from './ui/Footer';
import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import Toolbar from './ui/Toolbar';
import UIGrid from './ui/UIGrid';
import FONT_FACE from '../styles/fonts';
import GLOBAL_STYLES from '../styles/global';
import RESET from '../styles/reset';
import { useSelectedBlockId } from '../context/ToolbarContext';
import PositionedBlock from '../definitions/PositionedBlock';
import { DELETE_ID } from '../constants/blocks';
import createBlock from '../lib/createBlock';

const AppLayout: React.FC = () => {
    const selectedBlockId = useSelectedBlockId();
    const [blocks, setBlocks] = useState<PositionedBlock[]>([]);

    const isDeleteSelected = selectedBlockId === DELETE_ID;

    const onCanvasClick = () => {
        if (!isDeleteSelected && selectedBlockId != null && blocks.length === 0) {
            const block = createBlock(
                selectedBlockId,
                new Vector3(0, 0, 0),
            );
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

    return (
        <React.Fragment>
            <Global styles={RESET} />
            <Global styles={FONT_FACE} />
            <Global styles={GLOBAL_STYLES} />
            <UIGrid
                header={<Header />}
                sidebar={<Sidebar blocks={blocks} />}
                toolbar={<Toolbar />}
                footer={<Footer />}
                canvas={
                    <Suspense fallback={null}>
                        <BlockCanvas
                            onBlockClick={onBlockClick}
                            onCanvasClick={onCanvasClick}
                            blocks={blocks}
                        />
                    </Suspense>
                }
            />
        </React.Fragment>
    );
};

export default AppLayout;
