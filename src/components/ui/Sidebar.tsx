/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import PositionedBlock from '../../definitions/PositionedBlock';
import BlockCount from './BlockCount';
import Palette from './Palette';
import TabPanel, { Tab } from './TabPanel';

type Props = {
    blocks: PositionedBlock[];
};

const MENU_STYLE = {
    height: '100%',
};

const Sidebar: React.FC<Props> = ({ blocks }) => {
    const tabs: Tab[] = [
        { id: 'palette', title: 'Block Palette', contents: <Palette /> },
        {
            id: 'counts',
            title: 'Block Counts',
            contents: <BlockCount blocks={blocks} />,
        },
    ];

    return (
        <menu css={MENU_STYLE}>
            <TabPanel tabs={tabs} />
        </menu>
    );
};

export default Sidebar;
