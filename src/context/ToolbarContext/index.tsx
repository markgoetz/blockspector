import React, { useCallback, useContext, useState } from 'react';
import Block from '../../definitions/Block';
import ToolbarContext from "./ToolbarContext";

export const ToolbarContext = React.createContext<ToolbarContext>({
    toolbar: [],
    selectedIndex: 0,
    setSelectedIndex: () => null,
    setToolbarItemByIndex: () => null,
});

const TOOLBAR_LENGTH = 9;

const ToolbarProvider: React.FC = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const initialArray = Array.from({ length: TOOLBAR_LENGTH }).fill(null) as (Block | null)[];
    const [toolbar, setToolbar] = useState(initialArray);
    const setToolbarItemByIndex = useCallback(
        (item: Block, index: number) => {
            const newToolbar = [...toolbar];
            newToolbar[index] = item;
            setToolbar(newToolbar);
        },
        [toolbar, setToolbar]
    );

    const context = { toolbar, selectedIndex, setSelectedIndex, setToolbarItemByIndex }

    return (
        <ToolbarContext.Provider value={context}>
            {props.children}
        </ToolbarContext.Provider>
    );
};

const useToolbarState = () => {
    return context;
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

const useUpdateToolbarItem = (): ((item: Block) => void) => {
    const context = useContext(ToolbarContext);
    const { selectedIndex, setToolbarItemByIndex } = context;

    return useCallback(
        (item: Block) => {
            setToolbarItemByIndex(item, selectedIndex);
        },
        [selectedIndex, setToolbarItemByIndex]
    );
};

export default ToolbarProvider;

export {
    useUpdateSelectedIndex,
    useUpdateToolbarItem,
};
