import React, { useCallback, useContext, useState } from 'react';
import { Vector3 } from 'three';
import { v4 as uuidv4 } from 'uuid';
import { SPACER_ID } from '../../constants/blocks';
import PositionedBlock from '../../definitions/PositionedBlock';
import BuildContext from './BuildContext';

const INITIAL_BLOCK: PositionedBlock = {
    blockId: SPACER_ID,
    position: new Vector3(0, 0, 0),
    orientation: 'up',
    uuid: uuidv4(),
};

const SECOND_BLOCK: PositionedBlock = {
    blockId: 'andesite',
    position: new Vector3(1, 0, 0),
    orientation: 'up',
    uuid: uuidv4(),
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

const useAddBlock = (): ((blockId: string, position: Vector3) => void) => {
    const context = useContext(BuildContext);
    const { blocks, setBlocks } = context;
    
    return useCallback(
        (blockId: string, position: Vector3) => {
            const addedBlock: PositionedBlock = {
                blockId,
                position,
                orientation: 'up',
                uuid: uuidv4(),
            };

            setBlocks([...blocks, addedBlock]);
        },
        [blocks, setBlocks],
    );
};

const useRemoveBlock = (): ((uuId: string) => void) => {
    const context = useContext(BuildContext);
    const { blocks, setBlocks } = context;
    
    return useCallback(
        (uuid: string) => {
            setBlocks(blocks.filter(block => block.uuid !== uuid));
        },
        [blocks, setBlocks],
    );
};

export default BuildProvider;

export {
    useGetBlocks,
    useAddBlock,
    useRemoveBlock,
};
