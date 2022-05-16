import {FC, useRef} from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';
import {AddNewItem} from './AddNewItem';
import {useAppState} from '../state/AppStateContext';
import {Card} from './Card';
import {addTask} from '../state/actions';
import {useItemDrag} from '../utils/useItemDrag';

/*type PropsWithChildren<P> = P & {
    children?: ReactNode;
}*/

type ColumnProps = {
    text: string
    id: string
}
export const Column: FC<ColumnProps> = ({text, id}) => {
    const {draggedItem, getTasksByListId, dispatch} = useAppState()

    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)

    const {drag} = useItemDrag({type: "COLUMN", id, text})

    drag(ref)

    return (
        <ColumnContainer ref={ref}>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map(task => (
                <Card id={task.id} text={task.text} key={task.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>

    );
};
