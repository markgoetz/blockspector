/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { SIZES } from '../styles/variables';
import BLOCKS from '../constants/blocks';
import { ToolbarContext } from '../context/ToolbarContext';
import BlockButton from './BlockButton';
import { DELETE_INDEX, SPACER_INDEX } from '../constants/indexNumbers';

const CONTAINER_STYLE: CSSObject = {
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
        marginLeft: SIZES.BASE,
    },
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
            <div>
                <BlockButton
                    imageUrl={'/assets/images/spacer.svg'}
                    onClick={() => setIndex(SPACER_INDEX)}
                    selected={toolbarContext.selectedIndex === SPACER_INDEX}
                />
            </div>
            <ul css={LIST_STYLE}>
                {toolbarContext.toolbar.map((blockId, index) => {
                    const block = BLOCKS.find((b) => b.id === blockId) ?? null;
                    const imageUrl = block != null ? `/assets/textures/${block?.imageUrl}` : '';

                    return (
                        <li key={index}>
                            <BlockButton
                                imageUrl={imageUrl}
                                selected={
                                    index === toolbarContext.selectedIndex
                                }
                                index={index}
                                onClick={() => setIndex(index)}
                            />
                        </li>
                    );
                })}
            </ul>
            <div>
                <BlockButton
                    imageUrl={'/assets/images/delete.svg'}
                    onClick={() => setIndex(DELETE_INDEX)}
                    selected={toolbarContext.selectedIndex === DELETE_INDEX}
                />
            </div>
        </menu>
    );
};

export default Toolbar;
