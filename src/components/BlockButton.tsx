/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import Block from '../definitions/Block';
import { COLORS, SIZES } from '../styles/variables';

const INDEX_STYLE: CSSObject = {
    position: 'absolute',
    top: 1,
    left: 1,
    pointerEvents: 'none',
    backgroundColor: COLORS.GRAY.OFF_WHITE,
    width: SIZES.ONEPOINTFIVE,
    lineHeight: 1,
    padding: SIZES.QUARTER,
};

type Props = {
    block: Block | null;
    index?: number;
    onClick: () => void;
    selected: boolean;
};

const BlockButton: React.FC<Props> = ({ block, index, onClick, selected }) => {
    const buttonStyle: CSSObject = {
        width: SIZES.QUADRUPLE,
        height: SIZES.QUADRUPLE,
        backgroundImage:
            block != null
                ? `url("/assets/textures/${block.imageUrl}")`
                : undefined,
        backgroundSize: 3 * SIZES.BASE,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        boxShadow: selected
            ? `0 0 0 ${SIZES.QUARTER}px ${COLORS.PRIMARY.BRIGHT} inset`
            : `0 0 0 1px ${COLORS.GRAY.DARK} inset`,
        position: 'relative',
    };

    return (
        <button type="button" css={buttonStyle} onClick={onClick}>
            {index != null && <span css={INDEX_STYLE}>{index + 1}</span>}
        </button>
    );
};

export default BlockButton;
