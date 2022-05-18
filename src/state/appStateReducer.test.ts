import {DragItem} from '../DragItem';
import {AppState, List, Task} from './appStateReducer';

let initialState: AppState = {
    lists: [
        {
            id: "1",
            text: "Done",
            tasks: [
                {
                    id: "1",
                    text: "Add scss variables"
                },
                {
                    id: "2",
                    text: "Style 404 page"
                }
            ]
        },
        {
            id: "2",
            text: "In process",
            tasks: [
                {
                    id: "1",
                    text: "Add API types"
                }
            ]
        },

    ],
    draggedItem: null
}