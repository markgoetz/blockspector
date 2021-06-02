/** @jsx jsx */
import { CSSObject, jsx } from '@emotion/react';
import React from 'react';
import { SIZES, FONTS, COLORS } from '../../styles/variables';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const INPUT_STYLE: CSSObject = {
    width: '100%',
    padding: SIZES.HALF,
    fontFamily: FONTS.PRIMARY,
    fontSize: SIZES.BASE + SIZES.QUARTER,
    borderColor: COLORS.GRAY.MEDIUM,
    borderStyle: 'solid',
    borderWidth: 1,
    color: COLORS.GRAY.DARKER,
};

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={changeHandler}
            placeholder="Search..."
            css={INPUT_STYLE}
        />
    );
};

export default SearchBar;
