import { State, MainThunkDispatch } from "../reducers"
import { useSelector, useDispatch } from "react-redux"

/**
 * This effectively works like a succinct version of the connect
 * function.
 * 1. Create a selector function that receives the global state
 * object and provides some kind of usable (parsed) value specific
 * to the function (ie getCurrentRoute(state: State) would only
 * return the current route [or some fallback if route has problem])
 *  a. Return value of the selector defines the return value of this
 *      function
 * 2. Call this function and pass the function as the argument
 * 3. Assign output to a variable
 *
 * The reasoning for this is that both this function and the selector
 * separate the state management from the function that handles the
 * final value, meaning the fetch and parse is modular and reusable.
 *
 * @param selector a function that receives state to provide value
 */
export function useAppState<T>(selector: (state: State) => T): T {
    return useSelector(selector)
}

export function useAppDispatch() {
    return useDispatch<MainThunkDispatch>()
}
