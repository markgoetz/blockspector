/** @jsx jsx */
import { Global, jsx } from '@emotion/react';
import React, { Suspense } from 'react';

import BlockCanvas from './canvas/BlockCanvas';
import Footer from './ui/Footer';
import Header from './ui/Header';
import Sidebar from './ui/Sidebar';
import Toolbar from './ui/Toolbar';
import UIGrid from './ui/UIGrid';
import FONT_FACE from '../styles/fonts';
import GLOBAL_STYLES from '../styles/global';
import RESET from '../styles/reset';
import BuildState from './BuildState';

const AppLayout: React.FC = () => {
    return (
        <React.Fragment>
            <Global styles={RESET} />
            <Global styles={FONT_FACE} />
            <Global styles={GLOBAL_STYLES} />
            <BuildState>
                {(blocks, onCanvasClick, onBlockClick) => (
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
                )}
            </BuildState>
        </React.Fragment>
    );
};

export default AppLayout;
