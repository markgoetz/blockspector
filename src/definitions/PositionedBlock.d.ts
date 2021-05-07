import { Vector3 } from 'three';
import Block from './Block';

type PositionedBlock = {
    block: Block,
    position: Vector3,
    orientation: 'up' | 'down' | 'north' | 'south' | 'east' | 'west',
};

export default PositionedBlock;
