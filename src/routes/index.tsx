import React from "react"
import { Redirect, Route, Switch } from "react-router"
import { Home } from "../pages/Home"

interface RoutePaths {
    home: () => string
}

interface RouteInfo {
    component: any
    exact?: boolean
}

export const routePaths: RoutePaths = Object.freeze<RoutePaths>({
    home: () => "/"
})

export const routeMap = (() => {
    const websiteRoutes: [string, RouteInfo][] = [
        [
            routePaths.home(),
            {
                component: () => <Home></Home>,
                exact: true
            }
        ]
    ]

    const routeList = [...websiteRoutes]

    return routeList
})().map(([path, { component, exact }]) => (
    <Route key={path} path={path} render={component} exact={exact} />
))

export const Routes = () => {
    return (
        <Switch>
            {routeMap}
            <Redirect to={routePaths.home()} />
        </Switch>
    )
}
