/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { SIZES } from '../../styles/variables';
import BLOCKS from '../../constants/blocks';
import {
    ToolbarContext,
    useUpdateSelectedIndex,
} from '../../context/ToolbarContext';
import BlockButton from '../ui/BlockButton';
import { DELETE_INDEX, SPACER_INDEX } from '../../constants/blocks';

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
    const updateSelectedIndex = useUpdateSelectedIndex();

    const setIndex = (index: number) => {
        updateSelectedIndex(index);
    };

    const onWheel = (e: React.WheelEvent) => {
        let newIndex = toolbarContext.selectedIndex;
        if (e.deltaY < 0) {
            newIndex++;
        } else if (e.deltaY > 0) {
            newIndex--;
        }

        if (newIndex < 0) {
            newIndex += DELETE_INDEX + 1;
        } else if (newIndex > DELETE_INDEX) {
            newIndex -= DELETE_INDEX + 1;
        }

        updateSelectedIndex(newIndex);
    };

    return (
        <menu css={CONTAINER_STYLE} onWheel={onWheel}>
            <div>
                <BlockButton
                    imageUrl={'/assets/images/spacer.svg'}
                    onClick={() => setIndex(SPACER_INDEX)}
                    selected={toolbarContext.selectedIndex === SPACER_INDEX}
                    name="Spacer"
                />
            </div>
            <ul css={LIST_STYLE}>
                {toolbarContext.toolbar.map((blockId, index) => {
                    const block = BLOCKS.find((b) => b.id === blockId) ?? null;
                    const imageUrl =
                        block != null
                            ? `/assets/textures/${block?.imageUrl}`
                            : null;
                    const name = block != null ? block.name : '';

                    return (
                        <li key={index}>
                            <BlockButton
                                imageUrl={imageUrl}
                                selected={
                                    index === toolbarContext.selectedIndex
                                }
                                index={index}
                                onClick={() => setIndex(index)}
                                name={name}
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
                    name="Delete"
                />
            </div>
        </menu>
    );
};

export default Toolbar;
