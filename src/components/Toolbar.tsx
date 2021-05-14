/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { ToolbarContext } from '../context/ToolbarContext';
import BlockButton from './BlockButton';

const CONTAINER_STYLE: CSSObject = {
    margin: 'auto',
};

const LIST_STYLE: CSSObject = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
};

const Toolbar: React.FC = () => {
    const toolbarContext = useContext(ToolbarContext);

    const setIndex = (index: number) => {
        toolbarContext.setSelectedIndex(index);
    };

    return (
        <menu css={CONTAINER_STYLE}>
            <ul css={LIST_STYLE}>
                {toolbarContext.toolbar.map((block, index) => 
                    <li key={index}>
                        <BlockButton
                            block={block}
                            selected={index === toolbarContext.selectedIndex}
                            index={index}
                            onClick={() => setIndex(index)}
                        />
                    </li>
                )}
            </ul>
        </menu>
    );
};

export default Toolbar;
