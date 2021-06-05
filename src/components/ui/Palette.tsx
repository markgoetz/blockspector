/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/react';
import { useState } from 'react';
import BlockGrid from './BlockGrid';
import SearchBar from './SearchBar';
import { SIZES } from '../../styles/variables';

const LAYOUT_STYLE: CSSObject = {
    display: 'grid',
    gridColumnTemplate: '1fr',
    gridRowTemplate: 'auto 1fr',
    gridGap: SIZES.BASE,
    maxHeight: '100%',
    height: '100%',
};

const GRID_CONTAINER_STYLE: CSSObject = {
    minHeight: 0,
};

const Palette: React.FC = () => {
    const [query, setQuery] = useState('');

    return (
        <div css={LAYOUT_STYLE}>
            <div>
                <SearchBar value={query} onChange={setQuery} />
            </div>

            <div css={GRID_CONTAINER_STYLE}>
                <BlockGrid query={query} />
            </div>
        </div>
    );
};

export default Palette;
