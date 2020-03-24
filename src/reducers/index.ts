import {
    connectRouter,
    RouterAction,
    RouterState
} from "connected-react-router"
import { History } from "history"
import { combineReducers } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { ExampleReducer, ExampleState, ExampleAction } from "./example"

export type MainAction = RouterAction | ExampleAction

export type MainThunkResult<R> = ThunkAction<R, State, undefined, MainAction>
export type MainThunkDispatch = ThunkDispatch<State, undefined, MainAction>

export interface State {
    router: RouterState
    example: ExampleState
}

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        example: ExampleReducer
    })
