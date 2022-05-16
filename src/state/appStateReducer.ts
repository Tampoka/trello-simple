import {Action} from './actions';
import {v1} from 'uuid';

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
}

export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "ADD_LIST": {
            return {...state,
                lists: [...state.lists,
                    {id: v1(), text: action.payload, tasks: []}]}
        }
   /*     case "ADD_TASK": {
            return {...state, lists: [...state.lists, state.lists[action.payload.listId]:{
                ...state.lists[action.payload.listId,tasks:{id:v1(),text:action.payload.text}
            ]}
        }*/
        default: {
            return state
        }
    }
}