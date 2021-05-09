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
        []
    );

    const context = { toolbar, selectedIndex, setSelectedIndex, setToolbarItemByIndex }

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

const useUpdateToolbarItem = (): ((item: Block, index: number) => void) => {
    const context = useContext(ToolbarContext);

    return useCallback(
        (item: Block, index: number) => {
            context.setToolbarItemByIndex(item, index);
        },
        []
    );
};

export default ToolbarProvider;

export {
    useUpdateSelectedIndex,
    useUpdateToolbarItem,
};
