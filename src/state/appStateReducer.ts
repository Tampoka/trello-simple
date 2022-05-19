import {Action} from './actions';
import {v1} from 'uuid';
import {findItemIndexById, moveItem} from '../utils/arrayUtils';
import {DragItem} from '../DragItem';
import produce from 'immer'

const initState={} as AppState
export type Task = {
    id: string
    text: string
}

export type List = {
    id: string
    text: string
    tasks: Task[]
}

export type AppState = {
    lists: List[]
    draggedItem: DragItem | null
}

export const appStateReducer = (state=initState, action: Action) =>
produce(state,(draft:AppState)=>{
    switch (action.type) {
        case "ADD_LIST": {
            draft.lists.push({
                id: v1(),
                text: action.payload,
                tasks: []
            })
            break
        }
        case 'DELETE_LIST': {
            draft.lists = draft.lists.filter(list => list.id !== action.payload)
            break
        }
        case 'DELETE_TASK': {
            const {id, columnId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, columnId)
            const taskIndex = findItemIndexById(
                draft.lists[targetListIndex].tasks,
                id
            )
            draft.lists[targetListIndex].tasks.splice(taskIndex, 1)
            break
        }
        case "ADD_TASK": {
            const {text, columnId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, columnId)

            draft.lists[targetListIndex].tasks.push({
                id: v1(),
                text
            })
            break
        }
        case 'UPDATE_LIST':{
            const {title,columnId}=action.payload
            const targetListIndex = findItemIndexById(draft.lists, columnId)
            draft.lists[targetListIndex].text=title
            break
        }
        case 'UPDATE_TASK':{
            const {id, columnId,title} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, columnId)
            const taskIndex = findItemIndexById(
                draft.lists[targetListIndex].tasks,
                id
            )
            draft.lists[targetListIndex].tasks[taskIndex].text=title
            break
        }
        case "MOVE_LIST": {
            const {draggedId, hoverId} = action.payload
            const dragIndex = findItemIndexById(draft.lists, draggedId)
            const hoverIndex = findItemIndexById(draft.lists, hoverId)
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
            break
        }
        case 'MOVE_TASK': {
            const {
                draggedItemId,
                hoveredItemId,
                sourceColumnId,
                targetColumnId
            } = action.payload

            const sourceListIndex = findItemIndexById(
                draft.lists,
                sourceColumnId
            )
            const targetListIndex = findItemIndexById(
                draft.lists,
                targetColumnId
            )
            const dragIndex = findItemIndexById(
                draft.lists[sourceListIndex].tasks,
                draggedItemId
            )
            const hoverIndex = hoveredItemId
                ? findItemIndexById(
                    draft.lists[targetListIndex].tasks,
                    hoveredItemId
                )
                : 0
            const item = draft.lists[sourceListIndex].tasks[dragIndex]

            draft.lists[sourceListIndex].tasks.splice(dragIndex, 1)
            draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item)
            break
        }
        case "SET_DRAGGED_ITEM": {
            draft.draggedItem = action.payload
            break
        }
        default:
            break
    }
})