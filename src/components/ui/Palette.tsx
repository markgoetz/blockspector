/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/react';
import { useState } from 'react';
import BlockGrid from './BlockGrid';
import SearchBar from './SearchBar';
import { SIZES } from '../../styles/variables';

const LAYOUT_STYLE: CSSObject = {
    '> * + *': {
        marginTop: SIZES.BASE,
    },
};

const Palette: React.FC = () => {
    const [query, setQuery] = useState('');

    return (
        <div css={LAYOUT_STYLE}>
            <SearchBar value={query} onChange={setQuery} />
            <BlockGrid query={query} />
        </div>
    );
};

export default Palette;
