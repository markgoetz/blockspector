import Block from '../../definitions/Block';

type ToolbarContext = {
    toolbar: (Block | null)[],
    selectedIndex: number,
    setSelectedIndex: (index: number) => void,
    setToolbarItemByIndex: (item: Block, index: number) => void,
};

export default ToolbarContext;
