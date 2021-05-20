type ToolbarContext = {
    toolbar: (string | null)[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    setToolbarItemIdByIndex: (itemId: string, index: number) => void;
};

export default ToolbarContext;
