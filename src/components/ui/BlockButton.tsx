/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';
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
};

const TOOLTIP_STYLE: CSSObject = {
    position: 'absolute',
    top: '100%',
    backgroundColor: COLORS.PRIMARY.BRIGHT,
    color: COLORS.GRAY.OFF_WHITE,
    zIndex: 2,
    textAlign: 'left',
    padding: SIZES.HALF,
    whiteSpace: 'nowrap',
};

const BUTTON_STYLE: CSSObject = {
    width: SIZES.QUADRUPLE,
    height: SIZES.QUADRUPLE,
    backgroundSize: SIZES.TRIPLE,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    boxShadow: `0 0 0 1px ${COLORS.GRAY.DARK} inset`,
};

const SELECTED_BUTTON_STYLE: CSSObject = {
    ...BUTTON_STYLE,
    boxShadow: `0 0 0 ${SIZES.QUARTER}px ${COLORS.PRIMARY.BRIGHT} inset`,
};

type Props = {
    imageUrl: string | null;
    index?: number;
    name: string;
    onClick: () => void;
    selected: boolean;
    containerRef?: React.RefObject<HTMLElement>;
};

const BlockButton: React.FC<Props> = ({
    imageUrl,
    index,
    name,
    onClick,
    selected,
    containerRef,
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [xOffset, setXOffset] = useState(0);

    useEffect(() => {
        if (!isTooltipOpen) {
            return;
        }

        let containerRight = Number.MAX_VALUE;
        if (containerRef?.current != null) {
            const { current } = containerRef;
            containerRight =
                current.getBoundingClientRect().right -
                (current.offsetWidth - current.clientWidth);
        }

        if (buttonRef.current != null && tooltipRef.current != null) {
            // use buttonLeft so that it is not affected by the current xOffset value
            const buttonLeft = buttonRef.current.getBoundingClientRect().left;
            const tooltipWidth = tooltipRef.current.getBoundingClientRect()
                .width;
            const right = buttonLeft + tooltipWidth;

            if (right > containerRight) {
                setXOffset(containerRight - right);
            }
        }
    }, [containerRef, name, isTooltipOpen]);

    const baseButtonStyle = selected ? SELECTED_BUTTON_STYLE : BUTTON_STYLE;
    const buttonStyle = {
        ...baseButtonStyle,
        backgroundImage: imageUrl != null ? `url("${imageUrl}")` : undefined,
    };

    const tooltipStyle: CSSObject = {
        ...TOOLTIP_STYLE,
        visibility: isTooltipOpen ? 'visible' : 'hidden',
        left: xOffset,
    };

    return (
        <div css={TOOLTIP_CONTAINER_STYLE}>
            {name !== '' && (
                <span ref={tooltipRef} css={tooltipStyle}>
                    {name}
                </span>
            )}
            <button
                type="button"
                css={buttonStyle}
                onClick={onClick}
                onMouseOver={() => setIsTooltipOpen(true)}
                onMouseLeave={() => setIsTooltipOpen(false)}
                ref={buttonRef}
            >
                {index != null && <span css={INDEX_STYLE}>{index + 1}</span>}
            </button>
        </div>
    );
};

export default BlockButton;
