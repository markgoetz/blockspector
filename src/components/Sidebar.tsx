/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import TabPanel, { Tab } from './TabPanel';

const Sidebar: React.FC = () => {
    const tabs: Tab[] = [
        { id: 'palette', title: 'Block Palette', contents: <div>hi</div> },
        { id: 'counts', title: 'Block Counts', contents: <div>hi hi</div> },
    ];

    return (
        <menu>
            <TabPanel tabs={tabs} />
        </menu>
    );
};

export default Sidebar;
