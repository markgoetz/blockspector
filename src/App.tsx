/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import AppLayout from './components/AppLayout';
import ToolbarProvider from './context/ToolbarContext';

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
        <main css={app}>
            <ToolbarProvider>
                <AppLayout />
            </ToolbarProvider>
        </main>
    );
};

export default App;
