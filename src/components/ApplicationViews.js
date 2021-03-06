import React from "react"
import { Route } from "react-router-dom"
import { GraphicsBayTrackerHome } from "./home/GraphicsBayTrackerHome"
import { Profile } from "./profile/Profile"
import { GPUDataInterface } from "./pricing/GPUDataInterface"
import { HomepageBanner } from "./home/HomepageBanner"
import { ProfileForm } from "./profile/ProfileForm"



export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <GraphicsBayTrackerHome />
            </Route>
            <Route path="/profile/Profile" >
                <Profile />
            </Route>
            <Route path="/pricing/GPUDataInterface" >
                <GPUDataInterface />
            </Route>
            <Route path="/profile/ProfileForm" >
                <ProfileForm />
            </Route>
            
        </>
    )
}
