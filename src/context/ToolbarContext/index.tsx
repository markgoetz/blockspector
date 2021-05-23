import React, { useCallback, useContext, useState } from 'react';
import {
    DELETE_INDEX,
    SPACER_INDEX,
    SPACER_ID,
    DELETE_ID,
} from '../../constants/blocks';
import ToolbarContext from './ToolbarContext';

export const ToolbarContext = React.createContext<ToolbarContext>({
    toolbar: [],
    selectedIndex: 0,
    setSelectedIndex: () => null,
    setToolbarItemIdByIndex: () => null,
});

const TOOLBAR_LENGTH = 9;

const ToolbarProvider: React.FC = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const initialArray = Array.from({ length: TOOLBAR_LENGTH }).fill(null) as (
        | string
        | null
    )[];
    const [toolbar, setToolbar] = useState(initialArray);
    const setToolbarItemIdByIndex = useCallback(
        (itemId: string, index: number) => {
            const newToolbar = [...toolbar];
            newToolbar[index] = itemId;
            setToolbar(newToolbar);
        },
        [toolbar, setToolbar],
    );

    const context = {
        toolbar,
        selectedIndex,
        setSelectedIndex,
        setToolbarItemIdByIndex,
    };

    return (
        <ToolbarContext.Provider value={context}>
            {props.children}
        </ToolbarContext.Provider>
    );
};

const useUpdateSelectedIndex = (): ((index: number) => void) => {
    const context = useContext(ToolbarContext);
    const { setSelectedIndex } = context;

    return useCallback(
        (index: number) => {
            console.log(index);
            setSelectedIndex(index);
        },
        [setSelectedIndex],
    );
};

const useUpdateToolbarItem = (): ((itemId: string) => void) => {
    const context = useContext(ToolbarContext);
    const { selectedIndex, setToolbarItemIdByIndex } = context;

    return useCallback(
        (itemId: string) => {
            if (
                selectedIndex !== SPACER_INDEX &&
                selectedIndex !== DELETE_INDEX
            ) {
                setToolbarItemIdByIndex(itemId, selectedIndex);
            }
        },
        [selectedIndex, setToolbarItemIdByIndex],
    );
};

const usePutSpacerInSelectedIndex = (): (() => void) => {
    const context = useContext(ToolbarContext);
    const { selectedIndex, setToolbarItemIdByIndex } = context;

    return useCallback(() => {
        setToolbarItemIdByIndex(SPACER_ID, selectedIndex);
    }, [selectedIndex, setToolbarItemIdByIndex]);
};

const useSelectedBlockId = (): string | null => {
    const context = useContext(ToolbarContext);
    const { toolbar, selectedIndex } = context;
    console.log(selectedIndex);

    if (selectedIndex === DELETE_INDEX) {
        return DELETE_ID;
    } else if (selectedIndex === SPACER_INDEX) {
        return SPACER_ID;
    } else {
        return toolbar[selectedIndex] ?? null;
    }
};

export default ToolbarProvider;

export {
    useSelectedBlockId,
    useUpdateSelectedIndex,
    usePutSpacerInSelectedIndex,
    useUpdateToolbarItem,
};
