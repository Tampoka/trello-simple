import React from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';

type ColumnProps = {
    text?: string
}
const Column = ({text}: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
        </ColumnContainer>

    );
};

export default Column;