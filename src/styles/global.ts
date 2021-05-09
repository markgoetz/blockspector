import { FONTS, SIZES } from './variables';

const GLOBAL_STYLES = `
    html, body {
        font-family: ${FONTS.PRIMARY};
        font-size: ${SIZES.BASE}px;
        margin: 0;
        height: 100%;
    }

    button {
        font-family: ${FONTS.PRIMARY};
        font-size: ${SIZES.BASE}px;
    }

    * {
        box-sizing: border-box;
    }
}
`;

export default GLOBAL_STYLES;
