import {FC, useRef} from 'react';
import {ColumnContainer, ColumnTitle} from '../styles';
import {AddNewItem} from './AddNewItem';
import {useAppState} from '../state/AppStateContext';
import {Card} from './Card';
import {addTask, deleteList, moveList, moveTask, setDraggedItem} from '../state/actions';
import {useItemDrag} from '../utils/useItemDrag';
import {useDrop} from 'react-dnd';
import {isHidden} from '../utils/isHidden';

type ColumnProps = {
    text: string
    id: string
    isPreview?: boolean
}
export const Column: FC<ColumnProps> = ({text, id, isPreview}) => {
    const {draggedItem, getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)
    const ref = useRef<HTMLDivElement>(null)

    const {drag} = useItemDrag({type: "COLUMN", id, text})
    const [, drop] = useDrop({
        accept: ["COLUMN", "CARD"],
        hover() {
            if (!draggedItem) {
                return
            }
            if (draggedItem.type === "COLUMN") {
                if (draggedItem.id === id) {
                    return
                }
                dispatch(moveList(draggedItem.id, id))
            } else {
                if (draggedItem.columnId === id) {
                    return
                }
                if (tasks.length) {
                    return
                }
                dispatch(
                    moveTask(draggedItem.id, null, draggedItem.columnId, id)
                )
                dispatch(setDraggedItem({...draggedItem, columnId: id}))
            }
        }
    })

    drag(drop(ref))

    return (
        <ColumnContainer isPreview={isPreview}
                         ref={ref}
                         isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
        >
            <ColumnTitle>{text}
            <button onClick={()=>dispatch(deleteList(id))}>X</button>
            </ColumnTitle>
            {tasks.map(task => (
                <Card
                    id={task.id}
                    columnId={id}
                    text={task.text}
                    key={task.id}/>
            ))}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={text => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>

    );
};
