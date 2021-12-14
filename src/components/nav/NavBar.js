import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { Login } from "../auth/Login"
import { Logout } from "../auth/Logout"
import { Profile } from "../profile/Profile"
import { GPUDataInterface } from "../pricing/GPUDataInterface"
import "./NavBar.css"



export const NavBar = () => {

    

    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top onTop">
                <div id="navbarNavDropdown" className="navbar-collapse collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <button onClick={ GPUDataInterface }> Pricing Data</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={ Profile }> Profile and Tracked Cards</button>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {
                            localStorage.graphicsbaytracker_customer !== 1 ? <button onClick={ Logout }> Log Out </button> :  <Link className="nav-link" to="/Login">Log In</Link>
                               
                                   
                            }
                        </li>
        
                    </ul>
                </div>
            </nav>
        </div>
    )
}
