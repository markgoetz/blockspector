/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import { COLORS, SIZES } from '../../styles/variables';

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

const TOOLTIP_CONTAINER_STYLE: CSSObject = {
    position: 'relative',
    '& > span': {
        visibility: 'hidden',
    },
    '&:hover > span': {
        visibility: 'visible',
    },
};

const TOOLTIP_STYLE: CSSObject = {
    position: 'absolute',
    top: '100%',
    display: 'flex',
    backgroundColor: COLORS.PRIMARY.BRIGHT,
    color: COLORS.GRAY.OFF_WHITE,
    zIndex: 2,
    textAlign: 'left',
    padding: SIZES.HALF,
    whiteSpace: 'nowrap',
};

type Props = {
    imageUrl: string | null;
    index?: number;
    name: string;
    onClick: () => void;
    selected: boolean;
};

const BlockButton: React.FC<Props> = ({
    imageUrl,
    index,
    name,
    onClick,
    selected,
}) => {
    const buttonStyle: CSSObject = {
        width: SIZES.QUADRUPLE,
        height: SIZES.QUADRUPLE,
        backgroundImage: imageUrl != null ? `url("${imageUrl}")` : undefined,
        backgroundSize: SIZES.TRIPLE,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        boxShadow: selected
            ? `0 0 0 ${SIZES.QUARTER}px ${COLORS.PRIMARY.BRIGHT} inset`
            : `0 0 0 1px ${COLORS.GRAY.DARK} inset`,
    };

    return (
        <div css={TOOLTIP_CONTAINER_STYLE}>
            {name !== '' && <span css={TOOLTIP_STYLE}>{name}</span>}
            <button type="button" css={buttonStyle} onClick={onClick}>
                {index != null && <span css={INDEX_STYLE}>{index + 1}</span>}
            </button>
        </div>
    );
};

export default BlockButton;
