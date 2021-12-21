import react from "react";
import { useState, useEffect, useHistory } from "react";
import { GraphicsBayTrackerHome } from "./GraphicsBayTrackerHome";
import { Link } from "react-router-dom";

export const HomepageBanner = () => {
    
    return (
        <h1><Link to="/">GraphicsBay Tracker</Link></h1>
    )
}