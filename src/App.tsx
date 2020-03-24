import { ConnectedRouter } from "connected-react-router"
import { History } from "history"
import React, { FC } from "react"
import { Routes } from "./routes"

interface Props {
    history: History
}

export const App: FC<Props> = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    )
}
