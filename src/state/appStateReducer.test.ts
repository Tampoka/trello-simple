import {AppState, appStateReducer} from './appStateReducer';
import produce from 'immer'
import {v1} from 'uuid';
import {moveItem} from '../utils/arrayUtils';

let initialState: AppState

beforeEach(() => {
    initialState = {
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
})

describe("appStateReducer", () => {
    describe("list", () => {
        test("will be added with correct text", () => {
            const state = appStateReducer(initialState, {type: "ADD_LIST", payload: "READY"})
            const endState = produce(initialState, (draft) => {
                initialState.lists.push({id: v1(), text: "READY", tasks: []})
            })

            expect(state.lists.length).toBe(3);
            expect(state.lists[2].text).toEqual(endState.lists[2].text);
            expect(state.lists[2].tasks).toEqual([]);
        })
        test("with given id will be deleted", () => {
            const columnId = "1"
            const state = appStateReducer(initialState, {type: "DELETE_LIST", payload: columnId})
            const targetIndex = initialState.lists.findIndex(list => list.id === columnId)
            const endState = produce(initialState, (draft) => {
                initialState.lists.splice(targetIndex, 1)
            })

            expect(state).toEqual(endState);
            expect(state.lists.length).toBe(1);
            expect(state.lists[0].text).toBe("In process");
        })
        test("will be updated with text", () => {
            const columnId = "1"
            const title = "Finished"
            const state = appStateReducer(initialState, {type: "UPDATE_LIST", payload: {title, columnId}})
            const targetIndex = initialState.lists.findIndex(list => list.id === columnId)
            const endState = produce(initialState, (draft) => {
                initialState.lists[targetIndex].text = title
            })

            expect(state).toEqual(endState);
            expect(state.lists[0].text).toBe("Finished");
        })
        test("will be moved from startIndex to endIndex", () => {
            const draggedId = "1"
            const hoverId = "2"
            const state = appStateReducer(initialState, {type: "MOVE_LIST", payload: {draggedId, hoverId}})
            const startIndex = initialState.lists.findIndex(list => list.id === draggedId)
            const endIndex = initialState.lists.findIndex(list => list.id === hoverId)

            const endState = produce(initialState, (draft) => {
                initialState.lists = moveItem(initialState.lists, startIndex, endIndex)
            })

            expect(state).toEqual(endState);
            expect(state.lists[0].id).toBe("2");
            expect(state.lists[1].id).toBe("1");
        })
    })
    describe("task", () => {

    })
})