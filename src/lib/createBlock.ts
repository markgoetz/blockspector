import { v4 as uuidv4 } from 'uuid';
import { Vector3 } from 'three';
import PositionedBlock from '../definitions/PositionedBlock';

const createBlock = (blockId: string, position: Vector3): PositionedBlock => {
    return {
        blockId,
        position,
        orientation: 'up',
        uuid: uuidv4(),
    };
};

export default createBlock;
