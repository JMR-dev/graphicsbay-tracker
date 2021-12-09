import React from "react"
import { Route } from "react-router-dom"
import { GraphicsBayTrackerHome } from "./home/GraphicsBayTrackerHome"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/GraphicsBayTrackerHome">
                <GraphicsBayTrackerHome />
            </Route>
        </>
    )
}
