import {FC, ReactNode} from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';
import {AddNewItem} from './AddNewItem';

/*type PropsWithChildren<P> = P & {
    children?: ReactNode;
}*/

type ColumnProps = {
    text?: string
    id:string
    children?: ReactNode
}
export const Column: FC<ColumnProps> = ({text, id,children}) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>

    );
};
