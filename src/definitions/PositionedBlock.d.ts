import { Vector3 } from 'three';

type PositionedBlock = {
    blockId: string;
    position: Vector3;
    orientation: 'up' | 'down' | 'north' | 'south' | 'east' | 'west';
    uuid: string;
};

export default PositionedBlock;
