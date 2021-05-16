import React, { useCallback, useContext, useState } from 'react';
import { Vector3 } from 'three';
import { SPACER_ID } from '../../constants/blocks';
import PositionedBlock from '../../definitions/PositionedBlock';
import BuildContext from './BuildContext';

const INITIAL_BLOCK: PositionedBlock = {
    blockId: SPACER_ID,
    position: new Vector3(0, 0, 0),
    orientation: 'up',
};

const SECOND_BLOCK: PositionedBlock = {
    blockId: 'andesite',
    position: new Vector3(1, 0, 0),
    orientation: 'up',
}

const BuildContext = React.createContext<BuildContext>({
    blocks: [INITIAL_BLOCK, SECOND_BLOCK],
    setBlocks: () => null,
});
const BuildProvider: React.FC = (props) => {
    const [blocks, setBlocks] = useState<PositionedBlock[]>([INITIAL_BLOCK]);
    const context = { blocks, setBlocks };

    return (
        <BuildContext.Provider value={context}>
            {props.children}
        </BuildContext.Provider>
    );
};

const useGetBlocks = (): () => PositionedBlock[] => {
    const context = useContext(BuildContext);
    const { blocks } = context;
    
    return useCallback(
        () => blocks,
        [blocks],
    );
};

const useAddBlock = () => {
    // tbd
};

const useRemoveBlock = () => {
    // tbd
};

export default BuildProvider;

export {
    useGetBlocks,
    useAddBlock,
    useRemoveBlock,
};
