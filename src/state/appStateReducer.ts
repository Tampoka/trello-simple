import {Action} from './actions';
import {v1} from 'uuid';
import {findItemIndexById, moveItem} from '../utils/arrayUtils';
import {DragItem} from '../DragItem';

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

export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        /*  case "ADD_LIST": {
              return {...state,
                  lists: [...state.lists,
                      {id: v1(), text: action.payload, tasks: []}]}
          }*/
        case "ADD_LIST": {
            draft.lists.push({
                id: v1(),
                text: action.payload,
                tasks: []
            })
            break
        }
        case "ADD_TASK": {
            const {text, listId} = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)

            draft.lists[targetListIndex].tasks.push({
                id: v1(),
                text
            })
            break
        }
        case "MOVE_LIST": {
            const {draggedId, hoverId} = action.payload
            const dragIndex = findItemIndexById(draft.lists, draggedId)
            const hoverIndex = findItemIndexById(draft.lists, hoverId)
            draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
        }
            break
        default: {
            break
        }
    }
}