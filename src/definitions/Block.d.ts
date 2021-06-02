type BaseBlock = {
    id: string;
    name: string;
    imageUrl: string;
};

export type SimpleBlock = BaseBlock & {
    type: 'simple';
    textureUrl: string;
};

export type CubeBlock = BaseBlock & {
    type: 'cube',
    textureUrls: {
        'top': string,
        'bottom': string,
        'north': string,
        'south': string,
        'east': string,
        'west': string,
    }
};

type Block = SimpleBlock | CubeBlock;
export default Block;
