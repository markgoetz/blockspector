/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../styles/variables';

export type Tab = {
    id: string;
    title: string;
    contents: React.ReactElement;
};

type Props = {
    tabs: Tab[];
};

const CONTAINER_STYLE: CSSObject = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.GRAY.MEDIUM,
    backgroundColor: COLORS.GRAY.LIGHT,
};

const TAB_LIST_STYLE: CSSObject = {
    display: 'flex',
    justifyContent: 'stretch',
};

const TAB_STYLE: CSSObject = {
    flexGrow: 1,
    fontSize: 20,
    backgroundColor: COLORS.PRIMARY.BRIGHT,
    color: COLORS.GRAY.OFF_WHITE,
};

const SELECTED_TAB_STYLE: CSSObject = {
    ...TAB_STYLE,
    backgroundColor: COLORS.GRAY.LIGHT,
    color: COLORS.GRAY.DARKER,
};

const PANEL_STYLE: CSSObject = {
    padding: SIZES.BASE,
    backgroundColor: COLORS.GRAY.LIGHT,
};

const BUTTON_STYLE: CSSObject = {
    width: '100%',
    height: '100%',
    padding: SIZES.BASE,
};

const TabPanel: React.FC<Props> = ({ tabs }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div css={CONTAINER_STYLE}>
            <nav>
                <ul css={TAB_LIST_STYLE}>
                    {tabs.map((tab, index) => (
                        <li
                            key={tab.id}
                            css={
                                index === selectedIndex
                                    ? SELECTED_TAB_STYLE
                                    : TAB_STYLE
                            }
                        >
                            <button
                                type="button"
                                css={BUTTON_STYLE}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {tab.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div css={PANEL_STYLE}>{tabs[selectedIndex].contents}</div>
        </div>
    );
};

export default TabPanel;
