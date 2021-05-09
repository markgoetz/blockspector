/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useState } from 'react';

export type Tab = {
    title: string,
    contents: React.ReactElement,
};

type Props = {
    tabs: Tab[],
};


const TabPanel: React.FC<Props> = ({ tabs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return tabs[selectedIndex]?.contents ?? <div>oops</div>;
};

export default TabPanel;
