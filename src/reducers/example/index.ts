import { Reducer } from "redux"
import { ExampleType } from "../../actions/Types"

export interface ExampleState {
    example: string
}

export interface SetExampleAction {
    type: ExampleType.setExample
    payload: any
}

export type ExampleAction = SetExampleAction | any

const initialState: ExampleState = {
    example: ""
}

export const ExampleReducer: Reducer<ExampleState, ExampleAction> = (
    state = initialState,
    action
): ExampleState => {
    switch (action.type) {
        case ExampleType.setExample:
            return { ...state }
        default:
            return state
    }
}
