/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import AppLayout from './components/AppLayout';
import ToolbarProvider from './context/ToolbarContext';

const app: CSSObject = {
    maxHeight: '100vh',
    minHeight: '100vh',
    width: '100%',
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
