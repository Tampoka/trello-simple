import {DragItem} from '../DragItem';

export type Action =
    | {
    type: "ADD_LIST"
    payload: string
}
    | {
    type: "DELETE_LIST"
    payload: string
}
    | {
    type: "ADD_TASK"
    payload: {
        text: string
        columnId: string
    }
}
    | {
    type: "DELETE_TASK"
    payload: {
        id: string
        columnId: string
    }
}
    | {
    type: "MOVE_LIST"
    payload: {
        draggedId: string
        hoverId: string
    }
}
    | {
    type: "MOVE_TASK"
    payload: {
        draggedItemId: string
        hoveredItemId: string | null
        sourceColumnId: string
        targetColumnId: string
    }
}
    | {
    type: "SET_DRAGGED_ITEM"
    payload: DragItem | null
}
    | {
    type: "UPDATE_LIST"
    payload: {
        title: string
        columnId: string
    }
}
    | {
    type: "UPDATE_TASK"
    payload: {
        title: string
        columnId: string
        id:string
    }
}


export const addTask = (
    text: string,
    columnId: string,
): Action => ({
    type: "ADD_TASK",
    payload: {
        text,
        columnId: columnId
    }
})
export const addList = (
    text: string,
): Action => ({
    type: "ADD_LIST",
    payload: text
})

export const deleteList = (
    columnId: string,
): Action => ({
    type: "DELETE_LIST",
    payload: columnId
})

export const deleteTask = (
    id: string,
    columnId: string,
): Action => ({
    type: "DELETE_TASK",
    payload: {id, columnId}
})

export const moveList = (
    draggedId: string,
    hoverId: string,
): Action => ({
    type: "MOVE_LIST",
    payload: {
        draggedId,
        hoverId
    }
})

export const moveTask = (
    draggedItemId: string,
    hoveredItemId: string | null,
    sourceColumnId: string,
    targetColumnId: string
): Action => ({
    type: "MOVE_TASK",
    payload: {
        draggedItemId,
        hoveredItemId,
        sourceColumnId,
        targetColumnId
    }
})
export const setDraggedItem = (
    draggedItem: DragItem | null,
): Action => ({
    type: "SET_DRAGGED_ITEM",
    payload: draggedItem
})

export const updateList = (
    title: string,
    columnId: string,
): Action => ({
    type: "UPDATE_LIST",
    payload: {
        title,
        columnId
    }
})

export const updateTask = (
    title: string,
    columnId: string,
    id:string
): Action => ({
    type: "UPDATE_TASK",
    payload: {
        title,
        columnId,
        id
    }
})