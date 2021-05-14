/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import Block from '../definitions/Block';
import { COLORS, SIZES } from '../styles/variables';

const BUTTON_STYLE = {
    width: '100%',
    height: '100%',
    borderColor: COLORS.GRAY.DARKER,
    borderWidth: 1,
    borderStyle: 'solid',
};

const INDEX_STYLE: CSSObject = {
    position: 'absolute',
    top: SIZES.HALF,
    left: SIZES.HALF,
    pointerEvents: 'none',
};

const IMAGE_STYLE: CSSObject = {
    width: '100%',
    height: '100%',
};

type Props = {
    block: Block | null,
    index?: number,
    onClick: () => void,
};

const BlockButton: React.FC<Props> = ({ block, index, onClick }) => (
    <button type="button" css={BUTTON_STYLE} onClick={onClick}>
        {index != null && <span css={INDEX_STYLE}>{index + 1}</span>}
        {block != null && <img src={`/assets/textures/${block.imageUrl}`} css={IMAGE_STYLE} />}
    </button>
);

export default BlockButton;
