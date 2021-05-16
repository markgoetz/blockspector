import React, { useCallback, useContext, useState } from 'react';
import { SPACER_ID } from '../../constants/blocks';
import ToolbarContext from "./ToolbarContext";

export const ToolbarContext = React.createContext<ToolbarContext>({
    toolbar: [],
    selectedIndex: 0,
    setSelectedIndex: () => null,
    setToolbarItemIdByIndex: () => null,
});

const TOOLBAR_LENGTH = 9;

const ToolbarProvider: React.FC = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const initialArray = Array.from({ length: TOOLBAR_LENGTH }).fill(null) as (string | null)[];
    const [toolbar, setToolbar] = useState(initialArray);
    const setToolbarItemIdByIndex = useCallback(
        (itemId: string, index: number) => {
            const newToolbar = [...toolbar];
            newToolbar[index] = itemId;
            setToolbar(newToolbar);
        },
        [toolbar, setToolbar]
    );

    const context = { toolbar, selectedIndex, setSelectedIndex, setToolbarItemIdByIndex }

    return (
        <ToolbarContext.Provider value={context}>
            {props.children}
        </ToolbarContext.Provider>
    );
};

const useUpdateSelectedIndex = (): ((index: number) => void) => {
    const context = useContext(ToolbarContext);

    return useCallback(
        (index: number) => {
            context.setSelectedIndex(index);
        },
        []
    );
};

const useUpdateToolbarItem = (): ((itemId: string) => void) => {
    const context = useContext(ToolbarContext);
    const { selectedIndex, setToolbarItemIdByIndex } = context;

    return useCallback(
        (itemId: string) => {
            setToolbarItemIdByIndex(itemId, selectedIndex);
        },
        [selectedIndex, setToolbarItemIdByIndex]
    );
};


const usePutSpacerInSelectedIndex = (): (() => void) => {
    const context = useContext(ToolbarContext);
    const { selectedIndex, setToolbarItemIdByIndex } = context;

    return useCallback(
        () => {
            setToolbarItemIdByIndex(SPACER_ID, selectedIndex);
        },
        [selectedIndex, setToolbarItemIdByIndex]
    );
};

const getSelectedBlockId = (): (() => string | null) => {
    const context = useContext(ToolbarContext);
    const { toolbar, selectedIndex } = context;

    return useCallback(
        () => {
            return toolbar[selectedIndex] ?? null;
        },
        [toolbar, selectedIndex],
    );
};

export default ToolbarProvider;

export {
    getSelectedBlockId,
    useUpdateSelectedIndex,
    usePutSpacerInSelectedIndex,
    useUpdateToolbarItem,
};
