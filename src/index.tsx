import { createBrowserHistory } from "history"
import React from "react"
import { hydrate, render } from "react-dom"
import { Provider } from "react-redux"
import { Store } from "redux"
import { App } from "./App"
import "./index.css"
import { MainAction, State } from "./reducers"
import * as serviceWorker from "./serviceWorker"
import { configureStore } from "./store"

// Set up router
const history = createBrowserHistory()
// Create redux store
const store: Store<State, MainAction> = configureStore(history)()

const main = () => {
    const rootElement = document.querySelector<HTMLDivElement>("#root")
    const app = (
        <Provider store={store}>
            <App history={history} />
        </Provider>
    )
    if (rootElement !== null && rootElement.hasChildNodes()) {
        hydrate(app, rootElement)
    } else {
        render(app, rootElement)
    }
}

main()

// Dev only hot reloading
if (process.env.NODE_ENV !== "production" && (module as any).hot) {
    ;(module as any).hot.accept("./App", main)
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
