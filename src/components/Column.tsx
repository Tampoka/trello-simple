import {FC, ReactNode} from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';

/*type PropsWithChildren<P> = P & {
    children?: ReactNode;
}*/

type ColumnProps = {
    text?: string
    children?: ReactNode
}
export const Column: FC<ColumnProps> = ({text, children}) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>

    );
};
