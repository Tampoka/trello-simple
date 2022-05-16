import {FC} from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';
import {AddNewItem} from './AddNewItem';
import {useAppState} from '../state/AppStateContext';
import {Card} from './Card';
import {addTask} from '../state/actions';

/*type PropsWithChildren<P> = P & {
    children?: ReactNode;
}*/

type ColumnProps = {
    text?: string
    id: string
}
export const Column: FC<ColumnProps> = ({text, id}) => {
    const {getTasksByListId,dispatch} = useAppState()

    const tasks = getTasksByListId(id)

    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card id={task.id} text={task.text} key={task.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text=>dispatch(addTask(text,id))}
                dark
            />
        </ColumnContainer>

    );
};
