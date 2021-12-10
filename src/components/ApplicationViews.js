import React from "react"
import { Route } from "react-router-dom"
import { GraphicsBayTrackerHome } from "./home/GraphicsBayTrackerHome"
import { Profile } from ".profile/profile"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/GraphicsBayTrackerHome">
                <GraphicsBayTrackerHome />
            </Route>
            <Route path="profile/profile" >
                <Profile />
            </Route>
        </>
    )
}
