import { FONTS, SIZES, COLORS } from './variables';

const GLOBAL_STYLES = `
    html, body {
        font-family: ${FONTS.PRIMARY};
        font-size: ${SIZES.BASE}px;
        margin: 0;
        height: 100%;
        color: ${COLORS.GRAY.DARKER};
    }

    button {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }
}
`;

export default GLOBAL_STYLES;
