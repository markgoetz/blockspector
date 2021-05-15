/** @jsx jsx */
import { CSSObject, Global, jsx } from '@emotion/react';
import React, { Suspense } from 'react';
import BlockCanvas from './components/BlockCanvas';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import UIGrid from './components/UIGrid';
import ToolbarProvider from './context/ToolbarContext';
import FONT_FACE from './styles/fonts';
import GLOBAL_STYLES from './styles/global';
import RESET from './styles/reset';

const app: CSSObject = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: 'linear-gradient(to bottom, #c4f1ef, #f0fffe)',
};

const App: React.FC = () => {
    
    return (
        <div css={app}>
            <Global styles={RESET} />
            <Global styles={FONT_FACE} />
            <Global styles={GLOBAL_STYLES} />
            <ToolbarProvider>
                <UIGrid
                    header={<Header />}
                    sidebar={<Sidebar />}
                    toolbar={<Toolbar />}
                    footer={<Footer />}
                    canvas={<Suspense fallback={null}><BlockCanvas /></Suspense>}
                />
            </ToolbarProvider>
        </div>
    );
};

export default App;
