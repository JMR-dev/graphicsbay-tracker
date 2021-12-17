import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Login } from "../auth/Login"


import { Profile } from "../profile/Profile"
import { GPUDataInterface } from "../pricing/GPUDataInterface"
import { Props } from "react"
import "./NavBar.css"



export const NavBar = (props) => {
    const history = useHistory()
    
  
   
        
    
    

    return (
        <>
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <button onClick={() => history.push("/pricing/GPUDataInterface")}> Pricing Data</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={ () => history.push("/profile/Profile") }> Profile and Tracked Cards</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        < li className = "nav-item" > {
                                                <button onClick = {
                                                    () => {localStorage.removeItem("graphicsbaytracker_customer")}}> Log Out </button>

    }
                            </li>

</ul>
</div>
</nav>
</div>
</>
    )
}
