import { routerMiddleware } from "connected-react-router"
import { History } from "history"
import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux"
import thunk from "redux-thunk"
import { createRootReducer, State } from "./reducers"

export const configureStore = (history: History) => {
    const applyStoreEnhancer = (): StoreEnhancer<{ dispatch: {} }, {}>[] => {
        const storeEnhancer = [
            applyMiddleware(routerMiddleware(history), thunk)
        ]
        if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
            return [
                ...storeEnhancer,
                (window as any).__REDUX_DEVTOOLS_EXTENSION__()
            ]
        }
        return storeEnhancer
    }

    return (preloadedState?: State) => {
        const reducer = () => createRootReducer(history)
        const store = createStore(
            reducer(), // root reducer with router state
            preloadedState,
            compose(...applyStoreEnhancer())
        )

        if (process.env.NODE_ENV !== "production" && (module as any).hot) {
            ;(module as any).hot.accept("./reducers", () =>
                store.replaceReducer(reducer())
            )
        }
        return store
    }
}
