import PositionedBlock from '../../definitions/PositionedBlock';

type BuildContext = {
    blocks: PositionedBlock[];
    setBlocks: (blocks: PositionedBlock[]) => void;
};

export default BuildContext;
